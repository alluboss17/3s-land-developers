'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trees,
  ShieldCheck,
  Landmark,
  Award,
  MessageCircle,
  X,
  ArrowRight,
  Calculator,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type PlotType = 'Standard / Mid' | 'Road Side' | 'Corner';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState('');
  const [heroIndex, setHeroIndex] = useState(0);

  // Calculator state
  const [calcKatha, setCalcKatha] = useState(3);
  const [calcMonths, setCalcMonths] = useState(24);
  const [plotType, setPlotType] = useState<PlotType>('Standard / Mid');

  // These files are present in /public/images and therefore work on Vercel.
  const heroImages = [
    '/images/site-3.jpg',
    '/images/site-2.jpg',
    '/images/site-4.jpg',
    '/images/site-1.jpg',
  ];

  // Rotate the hero image automatically.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  // Pricing
  const plotRates: Record<PlotType, number> = {
    'Standard / Mid': 666667,
    'Road Side': 1200000,
    Corner: 1800000,
  };

  const basePricePerKatha = plotRates[plotType];
  const totalCost = Math.round(calcKatha * basePricePerKatha);
  const downPayment = Math.round(totalCost * 0.20);
  const monthlyInstallment = Math.round(
    (totalCost - downPayment) / calcMonths
  );

  const handlePlotClick = (size: string) => {
    setSelectedPlot(size);
    setIsModalOpen(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(
      language === 'bn' ? 'bn-BD' : 'en-IN'
    ).format(amount);
  };

  // The earlier translations file did not include an infrastructure block.
  // Keep these here so page.tsx cannot crash even if that block is missing.
  const infrastructure =
    language === 'bn'
      ? {
          badge: 'উন্নয়নের মানদণ্ড',
          title: 'কমিউনিটি অবকাঠামো',
          f1: '৪০ ফুট প্রশস্ত রাস্তা',
          f2: '২৪/৭ নিরাপত্তা জোন',
          f3: 'লেকসাইড গ্রিন বেল্ট',
          f4: 'নির্ধারিত মসজিদ',
        }
      : {
          badge: 'Development Standards',
          title: 'Community Infrastructure',
          f1: '40ft Wide Roads',
          f2: '24/7 Security Zones',
          f3: 'Lakeside Green Belts',
          f4: 'Dedicated Mosques',
        };

  // These labels have fallbacks so the page also works with the original
  // calculator translations file before the optional extra keys are added.
  const calculator = t.calculator as typeof t.calculator & {
    standardMid?: string;
    roadSide?: string;
    corner?: string;
    katha?: string;
    month?: string;
    months?: string;
    monthShort?: string;
  };

  const plotLabels = {
    standardMid:
      calculator.standardMid ??
      (language === 'bn' ? 'স্ট্যান্ডার্ড / মাঝামাঝি' : 'Standard / Mid'),
    roadSide:
      calculator.roadSide ??
      (language === 'bn' ? 'রাস্তার পাশের' : 'Road Side'),
    corner:
      calculator.corner ??
      (language === 'bn' ? 'কোণার প্লট' : 'Corner'),
    katha:
      calculator.katha ??
      (language === 'bn' ? 'কাঠা' : 'Katha'),
    month:
      calculator.month ??
      (language === 'bn' ? 'মাস' : 'MO.'),
    months:
      calculator.months ??
      (language === 'bn' ? 'মাস' : 'Months'),
    monthShort:
      calculator.monthShort ??
      (language === 'bn' ? 'মাস' : 'mo'),
  };

  const modalText = {
    title:
      language === 'bn'
        ? 'পোর্টফোলিও অনুরোধ করুন'
        : 'Request Portfolio',

    inquiring:
      language === 'bn'
        ? 'যে বিষয়ে জানতে চান:'
        : 'Inquiring regarding:',

    general:
      language === 'bn'
        ? 'সাধারণ প্লটের তথ্য'
        : 'General Plot Info',

    fullName:
      language === 'bn'
        ? 'পূর্ণ নাম'
        : 'Full Name',

    namePlaceholder:
      language === 'bn'
        ? 'যেমন: তানভীর আহমেদ'
        : 'e.g. Tanvir Ahmed',

    phone:
      language === 'bn'
        ? 'ফোন / হোয়াটসঅ্যাপ'
        : 'Phone / WhatsApp',

    phonePlaceholder:
      '+880 17XXXXXXX',
  };

  const whatsappUrl =
    'https://wa.me/8801835105772?text=' +
    encodeURIComponent(
      language === 'bn'
        ? 'হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমি আপনাদের প্লট সম্পর্কে বিস্তারিত জানতে আগ্রহী।'
        : 'Hello, I am interested in learning more about 3S Land Developers plots.'
    );

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900 relative selection:bg-emerald-900 selection:text-white">

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-8 right-8 z-40 bg-slate-950 hover:bg-emerald-800 text-white p-4 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero */}
      <section className="relative w-full min-h-[90vh] overflow-hidden bg-slate-950 text-white flex items-center justify-center text-center">

        {/* Animated Hero Image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[heroIndex]}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[heroIndex]}
                alt="3S Land Developers project site"
                fill
                priority={heroIndex === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/55 to-slate-950/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center pt-20">

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
            {t.hero.title1}
            <br className="hidden md:block" />
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

          {/* Hero image indicators */}
          <div className="flex items-center gap-2 mt-12">
            {heroImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setHeroIndex(index)}
                aria-label={`Show hero image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  heroIndex === index
                    ? 'w-8 bg-emerald-400'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-full bg-slate-950 py-16 px-6 text-white relative z-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-slate-800/50">
          {[
            { value: '20+', label: t.metrics.years },
            { value: '100%', label: t.metrics.legal },
            { value: '99+', label: t.metrics.acres },
            { value: '300+', label: t.metrics.plots },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center pl-4 first:pl-0"
            >
              <div className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mt-4">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* About Preview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-white flex flex-col items-center text-center"
      >
        <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
          {t.about.badge}
        </span>

        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-12 text-slate-950">
          {t.about.title}
        </h2>

        <div className="max-w-3xl space-y-8 text-slate-500 font-light leading-relaxed text-sm md:text-base">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </motion.section>

      {/* Plot Sizes */}
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
              <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
                {t.plots.badge}
              </span>

              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-slate-950">
                {t.plots.title}
              </h2>
            </div>

            <p className="max-w-md text-sm text-slate-500 font-light leading-relaxed">
              {t.plots.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-slate-200 bg-white">
            {[3, 4, 5, 10, 15, 20, 30, 40, 50, '70+'].map((size) => (
              <button
                key={size}
                onClick={() =>
                  handlePlotClick(`${size} ${plotLabels.katha}`)
                }
                className="py-16 px-6 border-r border-b border-slate-200 hover:bg-emerald-50 transition-colors text-center group cursor-pointer"
              >
                <span className="text-lg font-serif text-slate-700 group-hover:text-emerald-900 transition-colors">
                  {size} {plotLabels.katha}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infrastructure */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-white text-center"
      >
        <span className="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
          {infrastructure.badge}
        </span>

        <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-24 text-slate-950">
          {infrastructure.title}
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: Landmark, label: infrastructure.f4 },
            { icon: ShieldCheck, label: infrastructure.f2 },
            { icon: Trees, label: infrastructure.f3 },
            { icon: Award, label: infrastructure.f1 },
          ].map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 rounded-full border border-slate-200 flex items-center justify-center mb-6 group-hover:border-emerald-200 group-hover:bg-emerald-50 transition-all duration-500">
                  <Icon className="w-8 h-8 text-slate-600 group-hover:text-emerald-800 stroke-[1.5] transition-colors" />
                </div>

                <h4 className="text-sm font-serif text-slate-900 px-4">
                  {item.label}
                </h4>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full bg-slate-950 pt-24 pb-0 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              {t.gallery.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-serif tracking-tight">
              {t.gallery.title}
            </h2>
          </div>

          <Link
            href="/gallery"
            className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors flex items-center gap-2"
          >
            {t.gallery.cta}
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-[400px] md:h-[500px]">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="relative w-full h-full group overflow-hidden bg-slate-900 border-r border-slate-800/50 last:border-0"
            >
              <Image
                src={`/images/site-${item}.jpg`}
                alt={`Site documentation ${item}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </motion.section>

      {/* Calculator */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-slate-950 text-white border-t border-slate-900"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-500 text-[10px] font-semibold uppercase tracking-[0.3em] mb-4 block">
              {t.calculator.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">
              {t.calculator.title}
            </h2>

            <p className="text-slate-400 text-sm font-light">
              {t.calculator.subtitle}
            </p>
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-sm border border-slate-800 flex flex-col md:flex-row gap-12">

            {/* Controls */}
            <div className="flex-1 space-y-10">

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  {t.calculator.selectSize}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      value: 'Standard / Mid' as PlotType,
                      label: plotLabels.standardMid,
                    },
                    {
                      value: 'Road Side' as PlotType,
                      label: plotLabels.roadSide,
                    },
                    {
                      value: 'Corner' as PlotType,
                      label: plotLabels.corner,
                    },
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setPlotType(type.value)}
                      className={`py-3 px-2 text-xs font-semibold tracking-wider transition-colors border ${
                        plotType === type.value
                          ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400'
                          : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Katha */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                  {t.calculator.selectSize}:{' '}
                  <span className="text-white ml-2">
                    {calcKatha} {plotLabels.katha}
                  </span>
                </label>

                <input
                  type="range"
                  min="3"
                  max="20"
                  step="1"
                  value={calcKatha}
                  onChange={(e) =>
                    setCalcKatha(parseInt(e.target.value, 10))
                  }
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Tenure */}
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  {t.calculator.selectTenure}:{' '}
                  <span className="text-white ml-2">
                    {calcMonths} {plotLabels.months}
                  </span>
                </label>

                <div className="grid grid-cols-3 gap-4">
                  {[12, 24, 36].map((months) => (
                    <button
                      key={months}
                      onClick={() => setCalcMonths(months)}
                      className={`py-3 text-xs font-semibold tracking-wider transition-colors border ${
                        calcMonths === months
                          ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400'
                          : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-slate-600'
                      }`}
                    >
                      {months} {plotLabels.month}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 bg-slate-950 p-8 border border-slate-800/50 rounded-sm">
              <div className="space-y-8">

                <div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">
                    {t.calculator.estTotal}
                  </div>

                  <div className="text-3xl font-serif text-white">
                    BDT {formatCurrency(totalCost)}
                  </div>
                </div>

                <div className="h-px w-full bg-slate-800/50" />

                <div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">
                    {t.calculator.downPayment}
                  </div>

                  <div className="text-xl font-serif text-slate-300">
                    BDT {formatCurrency(downPayment)}
                  </div>
                </div>

                <div className="h-px w-full bg-slate-800/50" />

                <div>
                  <div className="text-[10px] font-semibold text-emerald-500/70 uppercase tracking-[0.2em] mb-2">
                    {t.calculator.monthlyEst}
                  </div>

                  <div className="text-4xl font-serif text-emerald-500">
                    BDT {formatCurrency(monthlyInstallment)}{' '}
                    <span className="text-sm font-light text-slate-500 tracking-normal">
                      /{plotLabels.monthShort}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handlePlotClick(
                      `${plotType} - ${calcKatha} ${plotLabels.katha} - ${calcMonths} ${plotLabels.months}`
                    )
                  }
                  className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors mt-4 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  {t.calculator.inquireBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full py-32 px-6 bg-slate-50 text-slate-950 text-center flex flex-col items-center"
      >
        <span className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] mb-6 block">
          {t.cta.badge}
        </span>

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

      {/* Lead Modal */}
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
                type="button"
                aria-label="Close"
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>

              <h3 className="text-3xl font-serif text-slate-950 mb-3 tracking-tight">
                {modalText.title}
              </h3>

              <p className="text-sm text-slate-500 mb-8 font-light">
                {modalText.inquiring}{' '}
                <span className="font-semibold text-emerald-800">
                  {selectedPlot || modalText.general}
                </span>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const name = (
                    form.elements.namedItem('name') as HTMLInputElement
                  ).value;
                  const phone = (
                    form.elements.namedItem('phone') as HTMLInputElement
                  ).value;

                  const message =
                    language === 'bn'
                      ? `হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমার নাম ${name} (${phone})। আমি ${selectedPlot || 'প্লট'} সম্পর্কে বিস্তারিত জানতে আগ্রহী।`
                      : `Hello 3S Land Developers, my name is ${name} (${phone}). I am interested in details regarding ${selectedPlot || 'land plots'}.`;

                  window.open(
                    `https://wa.me/8801835105772?text=${encodeURIComponent(message)}`,
                    '_blank'
                  );

                  setIsModalOpen(false);
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">
                    {modalText.fullName}
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={modalText.namePlaceholder}
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 focus:border-emerald-800 outline-none text-slate-900 text-sm transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">
                    {modalText.phone}
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={modalText.phonePlaceholder}
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
