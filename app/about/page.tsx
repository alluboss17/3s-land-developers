'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
// import { translations } from '@/lib/translations'; 

export default function About() {
  const { language } = useLanguage();
  // const t = translations[language].about_page; // Uncomment this once you add about_page to translations.ts

  return (
    // FIXED: Changed bg-white to bg-slate-950
    <main className="min-h-screen bg-slate-950 selection:bg-emerald-900 selection:text-white pt-20">
      
      <section className="py-32 px-6 bg-slate-950 text-white text-center border-b border-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-emerald-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block"
          >
            {/* Replace with {t.legacy} */}
            Our Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            {/* Replace with {t.title} */}
            Two Decades of <span className="text-slate-400 italic font-light">Trust.</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          // FIXED: Changed text-slate-600 to text-slate-400
          className="text-base md:text-lg text-slate-400 font-light leading-loose text-center mb-24"
        >
          {/* FIXED: Changed text-slate-900 to text-white */}
          <p className="text-2xl md:text-3xl text-white font-serif mb-10 leading-relaxed">
            3S Land Developers is a premier real estate organization serving the land development, filling, and plot trading sectors with an unblemished 20-year reputation.
          </p>
          <p className="max-w-3xl mx-auto">
            We focus purely on the foundation of property: <strong className="text-emerald-400">the land itself</strong>. We acquire, systematically fill, legally clear, and develop vast tracts of land into master-planned communities. Every single plot we hand over is guaranteed 100% free of legal disputes, ready for immediate deed registration and your visionary development.
          </p>
        </motion.div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-900 pt-24">
          {[
            { icon: Clock, title: "20 Years History", desc: "A zero-failure track record over two decades of operation." },
            { icon: Shield, title: "100% Legal Guarantee", desc: "Completely dispute-free deed documentation on every single plot." },
            { icon: TrendingUp, title: "Prime Investment", desc: "Strategic locations ensuring massive ROI for our buyers." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="text-center group"
            >
              {/* FIXED: Changed bg-slate-50 to bg-slate-900 and text-slate-800 to text-slate-300 */}
              <div className="w-16 h-16 bg-slate-900 group-hover:bg-emerald-950 group-hover:text-emerald-400 transition-colors duration-500 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
                <item.icon className="w-6 h-6" strokeWidth={1} />
              </div>
              {/* FIXED: Changed text-slate-900 to text-white */}
              <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
              {/* FIXED: Changed text-slate-500 to text-slate-400 */}
              <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}