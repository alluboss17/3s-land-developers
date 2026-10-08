'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Land Filling', 'Site Infrastructure', 'Master Layouts'];

  const galleryItems = [
    { title: "Abakash Lake View Filling", category: "Land Filling", image: "/images/wide.jpg" },
    { title: "Main Boundary Marking", category: "Site Infrastructure", image: "/images/board.jpg" },
    { title: "Heavy Equipment Operations", category: "Land Filling", image: "/images/action.jpg" },
    { title: "Main Access Road Construction", category: "Site Infrastructure", image: "/images/wide.jpg" },
    { title: "Master Development Aerial", category: "Master Layouts", image: "/images/board.jpg" },
    { title: "Block A Sector Clearing", category: "Land Filling", image: "/images/action.jpg" },
  ];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-900 selection:text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center py-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-400 text-[10px] font-semibold uppercase tracking-[0.3em] block mb-4"
          >
            Visual Evidence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            Project Archives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-400 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Direct photographic progress across our active land filling, infrastructure preparation, and master plot developments.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-white text-slate-950 border-white' 
                  : 'bg-transparent text-slate-400 border-white/10 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={i}
                onClick={() => setSelectedImage(item.image)}
                className="group relative h-80 bg-slate-900 border border-white/10 overflow-hidden cursor-pointer"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-emerald-400 text-[10px] uppercase font-semibold tracking-[0.2em] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif text-white">{item.title}</h3>
                  </div>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 text-white/70 hover:text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full max-w-5xl h-[80vh]">
                <Image 
                  src={selectedImage} 
                  alt="Enlarged View" 
                  fill 
                  className="object-contain" 
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}