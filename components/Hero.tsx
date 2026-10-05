"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSearch() {
  const [project, setProject] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [zone, setZone] = useState("");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-4xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-2xl rounded-2xl p-4 md:p-6 mt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-left"
    >
      {/* Project Dropdown */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Select Project</label>
        <select 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 font-medium outline-none focus:border-emerald-600 transition-colors cursor-pointer"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        >
          <option value="">All Projects</option>
          <option value="obokash">Obokash Lake View Society</option>
        </select>
      </div>

      {/* Plot Size Dropdown */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Plot Size</label>
        <select 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 font-medium outline-none focus:border-emerald-600 transition-colors cursor-pointer"
          value={plotSize}
          onChange={(e) => setPlotSize(e.target.value)}
        >
          <option value="">Any Katha Size</option>
          <option value="3">3 Katha</option>
          <option value="5">5 Katha</option>
          <option value="10">10 Katha</option>
          <option value="20">20+ Katha</option>
        </select>
      </div>

      {/* Zoning Dropdown */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Zoning</label>
        <select 
          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-800 font-medium outline-none focus:border-emerald-600 transition-colors cursor-pointer"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      {/* Search Action */}
      <div className="w-full md:w-auto self-end">
        <button className="w-full md:w-auto px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-md transition-all whitespace-nowrap">
          Search Plots
        </button>
      </div>
    </motion.div>
  );
}