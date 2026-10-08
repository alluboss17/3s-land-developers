'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { translations } from '@/lib/translations';

interface HeroSearchProps {
  lang: 'en' | 'bn';
}

export default function HeroSearch({ lang }: HeroSearchProps) {
  const [project, setProject] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [zone, setZone] = useState("");
  
  const t = translations[lang].search;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-5xl bg-slate-950/80 backdrop-blur-xl border border-white/15 p-6 md:p-8 shadow-2xl mt-12 text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      
        {/* Project Dropdown */}
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{t.devLabel}</label>
          <select 
            className="bg-white/5 border border-white/20 rounded-none p-3 text-white text-xs font-light tracking-wider outline-none focus:border-white transition-colors cursor-pointer"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option value="" className="bg-slate-950 text-white">{t.allDev}</option>
            <option value="obokash" className="bg-slate-950 text-white">Abakash Lake View</option>
            <option value="main-avenue" className="bg-slate-950 text-white">Main Avenue Commercial</option>
          </select>
        </div>

        {/* Plot Size Dropdown */}
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{t.sizeLabel}</label>
          <select 
            className="bg-white/5 border border-white/20 rounded-none p-3 text-white text-xs font-light tracking-wider outline-none focus:border-white transition-colors cursor-pointer"
            value={plotSize}
            onChange={(e) => setPlotSize(e.target.value)}
          >
            <option value="" className="bg-slate-950 text-white">{t.anySize}</option>
            <option value="3" className="bg-slate-950 text-white">3 Katha</option>
            <option value="5" className="bg-slate-950 text-white">5 Katha</option>
            <option value="10" className="bg-slate-950 text-white">10 Katha</option>
            <option value="20" className="bg-slate-950 text-white">20+ Katha</option>
          </select>
        </div>

        {/* Zoning Dropdown */}
        <div className="flex flex-col">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{t.zoneLabel}</label>
          <select 
            className="bg-white/5 border border-white/20 rounded-none p-3 text-white text-xs font-light tracking-wider outline-none focus:border-white transition-colors cursor-pointer"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
          >
            <option value="" className="bg-slate-950 text-white">{t.allZones}</option>
            <option value="residential" className="bg-slate-950 text-white">{t.residential}</option>
            <option value="commercial" className="bg-slate-950 text-white">{t.commercial}</option>
          </select>
        </div>

        {/* Search Button */}
        <div>
          <button className="w-full py-3.5 bg-white hover:bg-slate-200 text-slate-950 font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">
            <Search className="w-4 h-4" /> {t.button}
          </button>
        </div>

      </div>
    </motion.div>
  );
}