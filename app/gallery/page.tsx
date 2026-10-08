'use client';

import { useState } from 'react';
import {
  motion,
  AnimatePresence,
} from 'framer-motion';
import Image from 'next/image';
import {
  X,
  Maximize2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type GalleryCategory =
  | 'all'
  | 'landFilling'
  | 'infrastructure'
  | 'layouts';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language].galleryPage;

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>('all');

  const categories = [
    {
      id: 'all' as const,
      label: t.categories.all,
    },
    {
      id: 'landFilling' as const,
      label: t.categories.landFilling,
    },
    {
      id: 'infrastructure' as const,
      label: t.categories.infrastructure,
    },
    {
      id: 'layouts' as const,
      label: t.categories.layouts,
    },
  ];

  const galleryItems = [
    {
      id: 1,
      title: t.items.filling,
      category: 'landFilling' as GalleryCategory,
      image: '/images/wide.jpg',
    },
    {
      id: 2,
      title: t.items.boundary,
      category: 'infrastructure' as GalleryCategory,
      image: '/images/board.jpg',
    },
    {
      id: 3,
      title: t.items.equipment,
      category: 'landFilling' as GalleryCategory,
      image: '/images/action.jpg',
    },
    {
      id: 4,
      title: t.items.road,
      category: 'infrastructure' as GalleryCategory,
      image: '/images/site-3.jpg',
    },
    {
      id: 5,
      title: t.items.aerial,
      category: 'layouts' as GalleryCategory,
      image: '/images/site-1.jpg',
    },
    {
      id: 6,
      title: t.items.clearing,
      category: 'landFilling' as GalleryCategory,
      image: '/images/site-4.jpg',
    },
  ];

  const getCategoryLabel = (category: GalleryCategory) => {
    switch (category) {
      case 'landFilling':
        return t.categories.landFilling;
      case 'infrastructure':
        return t.categories.infrastructure;
      case 'layouts':
        return t.categories.layouts;
      default:
        return t.categories.all;
    }
  };

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

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
            {t.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-slate-400 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {t.description}
          </motion.p>

        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setActiveCategory(category.id)
              }
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-white text-slate-950 border-white'
                  : 'bg-transparent text-slate-400 border-white/10 hover:border-white/40'
              }`}
            >
              {category.label}
            </button>
          ))}

        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.5,
                }}
                key={item.id}
                onClick={() =>
                  setSelectedImage(item.image)
                }
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
                      {getCategoryLabel(item.category)}
                    </span>

                    <h3 className="text-lg font-serif text-white">
                      {item.title}
                    </h3>

                  </div>

                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setSelectedImage(null)
              }
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6"
            >

              <button
                onClick={() =>
                  setSelectedImage(null)
                }
                className="absolute top-8 right-8 text-white/70 hover:text-white p-2"
                aria-label="Close image"
              >
                <X className="w-8 h-8" />
              </button>

              <div
                className="relative w-full max-w-5xl h-[80vh]"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                <Image
                  src={selectedImage}
                  alt={t.enlargedAlt}
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