'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trees, ShieldCheck, Landmark, Award, MessageCircle, 
  X, ArrowRight, Calculator, Globe 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState('');

  // Calculator State
  const [calcKatha, setCalcKatha] = useState(3);
  const [calcMonths, setCalcMonths] = useState(24);
  const [plotType, setPlotType] = useState<'Standard / Mid' | 'Road Side' | 'Corner'>('Standard / Mid');

  // Pricing Logic
  const plotRates = {
    'Standard / Mid': 666667, 
    'Road Side': 1200000,     
    'Corner': 1800000         
  };

  const basePricePerKatha = plotRates[plotType];
  const totalCost = Math.round(calcKatha * basePricePerKatha);
  const downPayment = Math.round(totalCost * 0.20);
  const monthlyInstallment = Math.round((totalCost - downPayment) / calcMonths);
  
  const whatsappUrl = "https://wa.me/8801835105772?text=" + encodeURIComponent("Hello, I am interested in learning more about 3S Land Developers plots.");

  const handlePlotClick = (size: string) => {
    setSelectedPlot(size);
    setIsModalOpen(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'bn' ? 'bn-BD' : 'en-IN').format(amount);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900 relative selection:bg-emerald-900 selection:text-white">
      
      {/* Floating Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed bottom-24 right-8 z-40 bg-white text-slate-950 hover:bg-emerald-50 p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center border border-slate-200 font-bold text-xs"
      >
        <Globe className="w-5 h-5 mr-2" />
        {language === 'en' ? 'বাংলা' : 'EN'}
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-slate-950 hover:bg-emerald-800 text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-slate-950 text-white min-h-[90vh] overflow-hidden pt-32">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image 
            src="/images/wide.jpg" 
            alt="3S Land Developers Project Site" 
            fill 
            className="object-cover scale-105 transform motion-safe:animate-pulse-slow"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950 z-0" />

        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-emerald-400 text-[10px] font-semibold uppercase tracking-[0.3em] mb-8"
          >
            {t.hero.badge}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 text-white drop-shadow-2xl leading-tight"
          >
            {t.hero.title1} <br className="hidden md:block" />
            <span className="text-slate-300 italic font-light">
              {t.hero.title2}
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-lg text-slate-300 max-w-2xl mb-12 leading-loose font-light"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-md"
          >
            <button 
              onClick={() => handlePlotClick('Abakash Premium')}
              className="px-8 py-4 bg-white text-slate-950 hover:bg-emerald-800 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500"
            >
              {t.hero.ctaPrimary}
            </button>
            <Link 
              href="/gallery"
              className="px-8 py-4 bg-transparent border border-slate-500 text-white hover:border-white hover:bg-white/5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Luxury Key Metrics */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full bg-slate-950 py-16 px-6 text-white relative z-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/50">
          {[
            { value: "20+", label: t.metrics.years },
            { value: "100%", label: t.metrics.legal },
            { value: "99+", label: t.metrics.acres },
            { value: "300+", label: t.metrics.plots }
          ].map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center pl-4 first:pl-0">
              <div className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight">{metric.value}</div>
              <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mt-4">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 1: Building Trust */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-white flex flex-col items-center text-center"
      >
        <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{t.about.badge}</span>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-12 text-slate-950">{t.about.title}</h2>
        <div className="max-w-3xl space-y-8 text-slate-500 font-light leading-relaxed text-sm md:text-base">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </motion.section>

      {/* SECTION 2: Curated Plot Sizes */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-24 px-6 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{t.plots.badge}</span>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-slate-950">{t.plots.title}</h2>
            </div>
            <p className="max-w-md text-sm text-slate-500 font-light leading-relaxed">
              {t.plots.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-slate-200 bg-white">
            {[3, 4, 5, 10, 15, 20, 30, 40, 50, '70+'].map((size) => (
              <button
                key={size}
                onClick={() => handlePlotClick(`${size} Katha`)}
                className="py-16 px-6 border-r border-b border-slate-200 hover:bg-emerald-50 transition-colors text-center group cursor-pointer"
              >
                <span className="text-lg font-serif text-slate-700 group-hover:text-emerald-900 transition-colors">
                  {size} {language === 'bn' ? 'কাঠা' : 'Katha'}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: Community Infrastructure */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-white text-center"
      >
        <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{t.infrastructure.badge}</span>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-24 text-slate-950">{t.infrastructure.title}</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: Landmark, label: t.infrastructure.f4 },
            { icon: ShieldCheck, label: t.infrastructure.f2 },
            { icon: Trees, label: t.infrastructure.f3 },
            { icon: Award, label: t.infrastructure.f1 }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center mb-6 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-all duration-500">
                <item.icon className="w-8 h-8 text-slate-600 group-hover:text-emerald-800 stroke-[1.5] transition-colors" />
              </div>
              <h4 className="text-sm font-serif text-slate-900 px-4">{item.label}</h4>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 4: Gallery Preview */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full bg-slate-950 pt-24 pb-0 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">{t.gallery.badge}</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">{t.gallery.title}</h2>
          </div>
          <Link href="/gallery" className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2">
            {t.gallery.cta} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-[400px] md:h-[500px]">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative w-full h-full group overflow-hidden bg-slate-900 border-r border-slate-800/50 last:border-0">
              <Image 
                src={`/images/site-${item}.jpg`} 
                alt={`Site documentation ${item}`} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Payment Calculator */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-slate-950 text-white border-t border-slate-900"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4 block">{t.calculator.badge}</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">{t.calculator.title}</h2>
            <p className="text-slate-400 text-sm font-light">{t.calculator.subtitle}</p>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-sm border border-slate-800 flex flex-col md:flex-row gap-12">
            {/* Controls */}
            <div className="flex-1 space-y-10">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  {t.calculator.selectSize}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Standard / Mid', 'Road Side', 'Corner'] as const).map(type => (
                    <button 
                      key={type}
                      onClick={() => setPlotType(type)}
                      className={`py-3 px-2 text-xs font-semibold tracking-wider transition-colors border ${
                        plotType === type 
                        ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400' 
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Katha Slider */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                  {t.calculator.selectSize}: <span className="text-white ml-2">{calcKatha} {language === 'bn' ? 'কাঠা' : 'Katha'}</span>
                </label>
                <input 
                  type="range" 
                  min="3" max="20" step="1" 
                  value={calcKatha} 
                  onChange={(e) => setCalcKatha(parseInt(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Tenure Selection */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  {t.calculator.selectTenure}: <span className="text-white ml-2">{calcMonths} {language === 'bn' ? 'মাস' : 'Months'}</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[12, 24, 36].map(months => (
                    <button 
                      key={months}
                      onClick={() => setCalcMonths(months)}
                      className={`py-3 text-xs font-semibold tracking-wider transition-colors border ${
                        calcMonths === months 
                        ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400' 
                        : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600'
                      }`}
                    >
                      {months} {language === 'bn' ? 'মাস' : 'MO.'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 bg-slate-950 p-8 border border-slate-800/50 rounded-sm">
              <div className="space-y-8">
                <div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">{t.calculator.estTotal}</div>
                  <div className="text-3xl font-serif text-white">BDT {formatCurrency(totalCost)}</div>
                </div>
                <div className="h-px w-full bg-slate-800/50" />
                <div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">{t.calculator.downPayment}</div>
                  <div className="text-xl font-serif text-slate-300">BDT {formatCurrency(downPayment)}</div>
                </div>
                <div className="h-px w-full bg-slate-800/50" />
                <div>
                  <div className="text-[10px] font-semibold text-emerald-500/70 uppercase tracking-[0.2em] mb-2">{t.calculator.monthlyEst}</div>
                  <div className="text-4xl font-serif text-emerald-500">
                    BDT {formatCurrency(monthlyInstallment)} <span className="text-sm font-light text-slate-500 tracking-normal">/{language === 'bn' ? 'মাস' : 'mo'}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handlePlotClick(`${plotType} - ${calcKatha} Katha - ${calcMonths} Months Plan`)}
                  className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-4 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" /> {t.calculator.inquireBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-slate-50 text-slate-950 text-center flex flex-col items-center"
      >
        <span className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">{t.cta.badge}</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight">
          {t.cta.title}
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mb-12 font-light leading-relaxed">
          {t.cta.subtitle}
        </p>
        <Link 
          href="/contact"
          className="px-10 py-5 bg-slate-950 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-slate-900/10"
        >
          {t.cta.btn}
        </Link>
      </motion.section>

      {/* Lead Generation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-10 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>

              <h3 className="text-3xl font-serif text-slate-950 mb-3 tracking-tight">
                {t.hero.ctaPrimary}
              </h3>
              <p className="text-sm text-slate-500 mb-8 font-light">
                Inquiring regarding: <span className="font-semibold text-emerald-800">{selectedPlot || 'General Plot Info'}</span>
              </p>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                  const message = `Hello 3S Land Developers, my name is ${name} (${phone}). I am interested in details regarding ${selectedPlot || 'land plots'}.`;
                  window.open(`https://wa.me/8801835105772?text=${encodeURIComponent(message)}`, '_blank');
                  setIsModalOpen(false);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required 
                    placeholder="e.g. Tanvir Ahmed" 
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-emerald-800 outline-none text-slate-900 text-sm transition-colors rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required 
                    placeholder="+880 17XXXXXXX" 
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-emerald-800 outline-none text-slate-900 text-sm transition-colors rounded-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-5 bg-slate-950 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-4 flex items-center justify-center gap-2"
                >
                  {t.cta.btn}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}