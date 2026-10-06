'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Maximize, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    { title: "Abakash Lake View Society", type: "Premium Residential", status: "Selling Fast", image: "/images/wide.jpg" },
    { title: "Main Avenue Commercial", type: "Commercial Zone", status: "Available", image: "/images/board.jpg" },
    { title: "South Block Extension", type: "Mixed Use", status: "Under Development", image: "/images/action.jpg" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-emerald-900 selection:text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] block mb-4"
            >
              Our Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-serif text-slate-950 tracking-tight"
            >
              Master Developments
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-500 max-w-sm text-sm font-light leading-relaxed"
          >
            Explore our strategically located, 100% dispute-free land developments curated for visionary investors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white group flex flex-col relative"
            >
              <div className="relative h-[400px] w-full overflow-hidden bg-slate-900">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute top-6 right-6 px-4 py-2 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                  {project.status}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <p className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">{project.type}</p>
                <h3 className="font-serif text-2xl text-slate-900 mb-8">{project.title}</h3>
                
                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center text-slate-500 text-sm font-light">
                    <Maximize className="w-4 h-4 mr-4 text-slate-400" strokeWidth={1.5} />
                    <span>Multiple Katha Sizes</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm font-light">
                    <MapPin className="w-4 h-4 mr-4 text-slate-400" strokeWidth={1.5} />
                    <span>Keraniganj, Dhaka</span>
                  </div>
                  <div className="flex items-center text-slate-500 text-sm font-light">
                    <CheckCircle2 className="w-4 h-4 mr-4 text-emerald-600" strokeWidth={1.5} />
                    <span>Ready for Registration</span>
                  </div>
                </div>
                
                <a 
                  href="/contact" 
                  className="w-full py-5 bg-transparent border border-slate-950 text-slate-950 group-hover:bg-slate-950 group-hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 text-center flex items-center justify-center gap-2"
                >
                  Inquire Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}