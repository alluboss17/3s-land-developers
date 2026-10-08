'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;

  const pillars = [
    {
      icon: Clock,
      title: t.pillars.historyTitle,
      desc: t.pillars.historyDesc,
    },
    {
      icon: Shield,
      title: t.pillars.legalTitle,
      desc: t.pillars.legalDesc,
    },
    {
      icon: TrendingUp,
      title: t.pillars.investmentTitle,
      desc: t.pillars.investmentDesc,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-emerald-900 selection:text-white pt-20">

      {/* Header */}
      <section className="py-32 px-6 bg-slate-950 text-white text-center border-b border-slate-900">
        <div className="max-w-4xl mx-auto">

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-emerald-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block"
          >
            {t.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
          >
            {t.title1}{' '}
            <span className="text-slate-400 italic font-light">
              {t.title2}
            </span>
          </motion.h1>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-base md:text-lg text-slate-400 font-light leading-loose text-center mb-24"
        >

          <p className="text-2xl md:text-3xl text-white font-serif mb-10 leading-relaxed">
            {t.intro}
          </p>

          <p className="max-w-3xl mx-auto">
            {t.description}
          </p>

        </motion.div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-900 pt-24">

          {pillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.2,
                }}
                className="text-center group"
              >

                <div className="w-16 h-16 bg-slate-900 group-hover:bg-emerald-950 group-hover:text-emerald-400 transition-colors duration-500 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
                  <Icon
                    className="w-6 h-6"
                    strokeWidth={1}
                  />
                </div>

                <h3 className="text-xl font-serif text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>
      </section>
    </main>
  );
}