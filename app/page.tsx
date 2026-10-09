'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  Trees,
  ShieldCheck,
  Landmark,
  MessageCircle,
  X,
  ArrowRight,
  Calculator,
  MapPin,
  Route,
  Square,
  CalendarDays,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type InquiryTopic = 'plot sizes' | 'location and roads' | 'price and payment';

const HERO_IMAGES = [
  '/images/site-3.jpg',
  '/images/site-2.jpg',
  '/images/site-4.jpg',
  '/images/site-1.jpg',
];

// Client-reported indicative range: BDT 20 lakh–60 lakh.
// 1 lakh = BDT 100,000. These are examples, not plot-specific quotations.
const MIN_PLOT_PRICE = 20 * 100_000;
const MAX_PLOT_PRICE = 60 * 100_000;
const PRICE_STEP = 5 * 100_000;
const DOWN_PAYMENT_RATE = 0.33;

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const isBn = language === 'bn';
  const shouldReduceMotion = useReducedMotion();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState('');
  const [heroIndex, setHeroIndex] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(30 * 100_000);

  const downPayment = Math.round(estimatedPrice * DOWN_PAYMENT_RATE);
  const remainingBalance = estimatedPrice - downPayment;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsModalOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat(isBn ? 'bn-BD' : 'en-IN', {
      maximumFractionDigits: 0,
    }).format(amount);

  const openInquiry = (topic: string) => {
    setSelectedInquiry(topic);
    setIsModalOpen(true);
  };

  const copy = {
    heroBadge: isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society',
    heroPrimary: isBn ? 'প্রকল্পের বিস্তারিত জানুন' : 'Request Project Details',
    heroAlt: isBn
      ? 'অবকাশ লেক ভিউ সোসাইটির প্রকল্প এলাকা'
      : 'Abakash Lake View Society project site',
    imageLabel: (index: number) =>
      isBn ? `প্রকল্পের ছবি ${index + 1} দেখুন` : `Show project image ${index + 1}`,
    metrics: [
      { value: '20+', label: isBn ? 'বছরের অভিজ্ঞতা' : 'Years of experience' },
      { value: '100%', label: isBn ? 'আইনগত যাচাইয়ের প্রতিশ্রুতি' : 'Legal due diligence commitment' },
      { value: '99+', label: isBn ? 'একর উন্নয়নকৃত জমি' : 'Acres developed' },
      { value: '300+', label: isBn ? 'হস্তান্তরিত প্লট' : 'Plots handed over' },
    ],
    plotSection: {
      badge: isBn ? 'প্লট সম্পর্কে জানুন' : 'Explore plot options',
      title: isBn ? 'আপনার প্রয়োজন অনুযায়ী তথ্য নিন' : 'Find the Right Plot for Your Plans',
      subtitle: isBn
        ? 'প্লটের আয়তন, অবস্থান, রাস্তার সংযোগ ও প্রাপ্যতা অনুযায়ী মূল্য ভিন্ন হতে পারে। বর্তমান তথ্য বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Pricing and availability can vary by plot size, location, road access, and other features. Contact the sales team for current information.',
      cards: [
        {
          key: 'plot sizes' as InquiryTopic,
          title: isBn ? 'প্লটের আয়তন' : 'Plot sizes',
          detail: isBn
            ? 'বর্তমানে কোন কোন আয়তনের প্লট পাওয়া যাচ্ছে তা জানুন।'
            : 'Ask which plot sizes are currently available.',
          Icon: Square,
        },
        {
          key: 'location and roads' as InquiryTopic,
          title: isBn ? 'অবস্থান ও রাস্তা' : 'Location and roads',
          detail: isBn
            ? 'প্লটের অবস্থান, রাস্তার সংযোগ ও দিক সম্পর্কে জানুন।'
            : 'Ask about plot locations, road access, and orientation.',
          Icon: Route,
        },
        {
          key: 'price and payment' as InquiryTopic,
          title: isBn ? 'মূল্য ও পেমেন্ট' : 'Price and payment',
          detail: isBn
            ? 'মূল্য, ডাউন পেমেন্ট এবং রেজিস্ট্রেশনের শর্ত নিশ্চিত করুন।'
            : 'Confirm the price, down payment, and registration terms.',
          Icon: Calculator,
        },
      ],
      inquire: isBn ? 'বিস্তারিত জানতে যোগাযোগ করুন' : 'Ask the sales team',
    },
    planning: {
      badge: isBn ? 'পরিকল্পিত কমিউনিটি' : 'Planned communities',
      title: isBn ? 'একটি পরিকল্পিত আবাসনের গুরুত্বপূর্ণ বিষয়' : 'The Details That Shape a Planned Community',
      subtitle: isBn
        ? 'রাস্তা, খোলা জায়গা ও কমিউনিটি সুবিধার চূড়ান্ত তথ্য অবকাশ লেক ভিউ সোসাইটির অফিসিয়াল নকশা থেকে নিশ্চিত করা হবে।'
        : 'The final roads, open spaces, and community facilities for Abakash Lake View Society should be confirmed against the official project layout.',
      cards: [
        {
          title: isBn ? 'রাস্তার নেটওয়ার্ক' : 'Road network',
          detail: isBn ? 'নকশা অনুযায়ী রাস্তা ও প্রবেশপথ।' : 'Roads and access according to the approved layout.',
          Icon: Route,
        },
        {
          title: isBn ? 'খোলা জায়গা ও সবুজায়ন' : 'Open spaces and greenery',
          detail: isBn ? 'পরিকল্পনায় থাকলে পার্ক ও সবুজ এলাকা।' : 'Parks and green spaces where included in the plan.',
          Icon: Trees,
        },
        {
          title: isBn ? 'কমিউনিটি সুবিধা' : 'Community facilities',
          detail: isBn ? 'মসজিদ, স্কুল বা অন্যান্য সুবিধা—নকশা অনুযায়ী।' : 'Mosques, schools, and other facilities where confirmed by the plan.',
          Icon: Landmark,
        },
        {
          title: isBn ? 'নিরাপত্তা ও ব্যবস্থাপনা' : 'Security and management',
          detail: isBn ? 'প্রকল্পে প্রযোজ্য নিরাপত্তা ও ব্যবস্থাপনা।' : 'Security and management arrangements applicable to the project.',
          Icon: ShieldCheck,
        },
      ],
    },
    calculator: {
      badge: isBn ? 'বিনিয়োগের প্রাথমিক হিসাব' : 'Investment planning',
      title: isBn ? 'প্লটের মূল্য ও ডাউন পেমেন্ট হিসাব' : 'Plot Price & Down Payment Estimator',
      subtitle: isBn
        ? 'প্রদত্ত ২০–৬০ লাখ টাকার আনুমানিক মূল্যসীমার মধ্যে একটি মূল্য বেছে নিন। নির্দিষ্ট প্লটের চূড়ান্ত মূল্য বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Choose an indicative price within the reported BDT 20–60 lakh range. Confirm the final price of a specific plot with the sales team.',
      selectedPrice: isBn ? 'আনুমানিক প্লটের মূল্য' : 'Estimated plot price',
      downPayment: isBn ? '৩৩% ডাউন পেমেন্ট' : '33% down payment',
      remaining: isBn ? 'অবশিষ্ট মূল্য (৬৭%)' : 'Remaining balance (67%)',
      registration: isBn ? 'রেজিস্ট্রেশনের শর্ত' : 'Registration condition',
      registrationText: isBn
        ? 'ডাউন পেমেন্ট পরিকল্পনায় ৩–৬ মাসের মধ্যে রেজিস্ট্রেশন সম্পন্ন করতে হবে। সঠিক সময়সীমা ও চুক্তির শর্ত বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Under the down-payment plan, registration must be completed within 3–6 months. Confirm the exact deadline and contractual terms with the sales team.',
      note: isBn
        ? 'এটি একটি প্রাথমিক হিসাব, নির্দিষ্ট প্লটের অফার নয়। অবশিষ্ট অর্থ পরিশোধের সময়সূচি, ফি ও অন্যান্য শর্ত বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'This is an illustrative estimate, not a plot-specific offer. Confirm the remaining payment schedule, fees, and other terms with the sales team.',
      minimum: isBn ? '২০ লাখ টাকা' : 'BDT 20 lakh',
      maximum: isBn ? '৬০ লাখ টাকা' : 'BDT 60 lakh',
      ask: isBn ? 'এই হিসাব সম্পর্কে জিজ্ঞাসা করুন' : 'Ask about this estimate',
    },
    modal: {
      title: isBn ? 'প্লট সম্পর্কে বিস্তারিত জানুন' : 'Request Plot Details',
      prompt: isBn
        ? 'আপনার তথ্য দিন। পরবর্তী ধাপে হোয়াটসঅ্যাপে বার্তা তৈরি হবে।'
        : 'Add your details. The next step will prepare a WhatsApp message.',
      topic: isBn ? 'আপনার আগ্রহের বিষয়' : 'Your inquiry',
      name: isBn ? 'পূর্ণ নাম' : 'Full name',
      namePlaceholder: isBn ? 'আপনার নাম লিখুন' : 'Enter your name',
      phone: isBn ? 'ফোন / হোয়াটসঅ্যাপ নম্বর' : 'Phone / WhatsApp number',
      phonePlaceholder: '+880 1XXXXXXXXX',
      submit: isBn ? 'হোয়াটসঅ্যাপে যোগাযোগ করুন' : 'Continue to WhatsApp',
      close: isBn ? 'বন্ধ করুন' : 'Close',
    },
  };

  const generalWhatsAppUrl =
    'https://wa.me/8801835105772?text=' +
    encodeURIComponent(
      isBn
        ? 'হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমি অবকাশ লেক ভিউ সোসাইটি সম্পর্কে বিস্তারিত জানতে আগ্রহী।'
        : 'Hello 3S Land Developers, I would like to learn more about Abakash Lake View Society.'
    );

  return (
    <main className="relative flex min-h-screen flex-col bg-white text-slate-900 selection:bg-emerald-900 selection:text-white">
      {/* Floating WhatsApp action */}
      <a
        href={generalWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isBn ? 'হোয়াটসঅ্যাপে যোগাযোগ করুন' : 'Contact on WhatsApp'}
        className="fixed bottom-5 right-4 z-40 flex items-center justify-center rounded-full border border-white/20 bg-emerald-700 p-4 text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Hero: the same local images are optimized by next/image on desktop and mobile */}
      <section className="relative flex min-h-[calc(100svh-5rem)] w-full items-center justify-center overflow-hidden bg-slate-950 py-20 text-center text-white md:min-h-[90vh] md:py-28">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={HERO_IMAGES[heroIndex]}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.25, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={HERO_IMAGES[heroIndex]}
                alt={copy.heroAlt}
                fill
                priority={heroIndex === 0}
                quality={85}
                sizes="100vw"
                className="object-cover object-[center_58%] md:object-center"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/90" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-8 sm:px-6 md:pt-12">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="mb-6 block text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300 sm:mb-8 sm:text-xs sm:tracking-[0.3em]"
          >
            {copy.heroBadge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="mb-6 max-w-4xl text-4xl font-serif leading-[1.12] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl"
          >
            {t.hero.title1}
            <br className="hidden md:block" />
            <span className="mt-1 block font-light italic text-slate-200 md:mt-2">
              {t.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="mb-9 max-w-2xl text-sm font-light leading-7 text-slate-200 sm:text-base sm:leading-8 md:mb-12 md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="flex w-full max-w-lg flex-col justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <button
              type="button"
              onClick={() => openInquiry(isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society')}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition duration-300 hover:bg-emerald-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-8 sm:tracking-[0.18em]"
            >
              {copy.heroPrimary}
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              href="/gallery"
              className="inline-flex min-h-12 items-center justify-center border border-white/60 bg-slate-950/15 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10 sm:px-8 sm:tracking-[0.18em]"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          <div className="mt-9 flex items-center gap-2.5" aria-label={isBn ? 'প্রকল্পের ছবি নির্বাচন করুন' : 'Choose project image'}>
            {HERO_IMAGES.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setHeroIndex(index)}
                aria-label={copy.imageLabel(index)}
                aria-pressed={heroIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  heroIndex === index ? 'w-8 bg-emerald-300' : 'w-2 bg-white/55 hover:bg-white'
                }`}
              />
            ))}
          </div>

          <p className="mt-4 text-[10px] tracking-wide text-white/75 sm:text-xs">
            {isBn
              ? 'আটিবাজার, কেরানীগঞ্জ মডেল, ঢাকা-১৩১২'
              : 'Atibazar, Keraniganj Model, Dhaka-1312'}
          </p>
        </div>
      </section>

      {/* Verified company metrics */}
      <section className="relative z-20 w-full bg-slate-950 px-5 py-12 text-white sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 text-center sm:gap-x-8 md:grid-cols-4 md:gap-10">
          {copy.metrics.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center">
              <div className="text-2xl font-serif font-light tracking-tight text-white sm:text-3xl md:text-4xl">
                {item.value}
              </div>
              <div className="mt-3 max-w-[13rem] text-[10px] font-medium leading-5 tracking-[0.08em] text-slate-400 sm:text-xs sm:tracking-[0.12em]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company story */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.75 }}
        className="flex w-full flex-col items-center bg-white px-5 py-20 text-center sm:px-6 md:py-28"
      >
        <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
          {t.about.badge}
        </span>
        <h2 className="mb-8 max-w-4xl text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:mb-10 md:text-5xl">
          {t.about.title}
        </h2>
        <div className="max-w-3xl space-y-5 text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 border-b border-emerald-800/40 pb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-900 transition-colors hover:border-emerald-700 hover:text-emerald-700"
        >
          {isBn ? 'আমাদের সম্পর্কে আরও জানুন' : 'Learn more about 3S'}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.section>

      {/* Useful inquiry paths, without pretending to have live plot inventory */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.75 }}
        className="w-full border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
                {copy.plotSection.badge}
              </span>
              <h2 className="text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                {copy.plotSection.title}
              </h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
              {copy.plotSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {copy.plotSection.cards.map(({ key, title, detail, Icon }, index) => (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                className="group flex h-full flex-col border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800/40 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-emerald-900/15 bg-emerald-50 text-emerald-900 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mb-3 text-xl font-serif text-slate-950 sm:text-2xl">{title}</h3>
                <p className="mb-8 flex-1 text-sm font-light leading-7 text-slate-600">{detail}</p>
                <button
                  type="button"
                  onClick={() => openInquiry(title)}
                  className="inline-flex min-h-11 items-center justify-between gap-3 border-t border-slate-200 pt-4 text-left text-xs font-bold uppercase tracking-[0.1em] text-emerald-900 transition-colors hover:text-emerald-700"
                >
                  {copy.plotSection.inquire}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Planning priorities; confirm project-specific facilities from the official noksha */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.75 }}
        className="w-full bg-white px-5 py-20 text-center sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
            {copy.planning.badge}
          </span>
          <h2 className="mb-6 text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            {copy.planning.title}
          </h2>
          <p className="text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
            {copy.planning.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 md:grid-cols-4 md:gap-10">
          {copy.planning.cards.map(({ title, detail, Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.06 }}
              className="group flex flex-col items-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-emerald-800/30 group-hover:bg-emerald-50 group-hover:text-emerald-900">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-serif text-slate-950">{title}</h3>
              <p className="max-w-xs text-sm font-light leading-6 text-slate-600">{detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Responsive gallery preview: no fixed total height on mobile */}
      <section className="w-full bg-slate-950 pt-20 text-white md:pt-24">
        <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400 sm:text-xs sm:tracking-[0.3em]">
              {t.gallery.badge}
            </span>
            <h2 className="text-3xl font-serif leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.gallery.title}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.12em] text-emerald-300 transition-colors hover:text-white md:self-auto md:tracking-[0.18em]"
          >
            {t.gallery.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-slate-800 sm:grid-cols-2 lg:h-[500px] lg:grid-cols-4">
          {HERO_IMAGES.slice().reverse().map((image, index) => (
            <Link
              key={image}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400 sm:aspect-[5/4] lg:aspect-auto lg:h-full"
            >
              <Image
                src={image}
                alt={isBn ? `অবকাশ লেক ভিউ সোসাইটির প্রকল্পের ছবি ${index + 1}` : `Abakash Lake View Society site photo ${index + 1}`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                {isBn ? 'প্রকল্পের ছবি' : 'Project photo'} 0{index + 1}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Price estimator: no invented per-Katha prices or monthly installment schedule */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.75 }}
        className="w-full border-t border-slate-900 bg-slate-950 px-5 py-20 text-white sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400 sm:text-xs sm:tracking-[0.3em]">
              {copy.calculator.badge}
            </span>
            <h2 className="mb-5 text-3xl font-serif leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {copy.calculator.title}
            </h2>
            <p className="text-sm font-light leading-7 text-slate-400 sm:text-base sm:leading-8">
              {copy.calculator.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 border border-slate-800 bg-slate-900 p-5 sm:p-8 md:grid-cols-2 md:gap-8 md:p-10">
            <div className="flex flex-col">
              <label htmlFor="plot-price" className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                {copy.calculator.selectedPrice}
              </label>
              <div className="mb-5 text-3xl font-serif text-white sm:text-4xl">
                BDT {formatCurrency(estimatedPrice)}
              </div>
              <input
                id="plot-price"
                type="range"
                min={MIN_PLOT_PRICE}
                max={MAX_PLOT_PRICE}
                step={PRICE_STEP}
                value={estimatedPrice}
                onChange={(event) => setEstimatedPrice(Number(event.target.value))}
                aria-valuetext={`BDT ${formatCurrency(estimatedPrice)}`}
                className="h-2 w-full cursor-pointer accent-emerald-500"
              />
              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-400">
                <span>{copy.calculator.minimum}</span>
                <span>{copy.calculator.maximum}</span>
              </div>

              <div className="mt-8 rounded-sm border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2 text-emerald-300">
                  <CalendarDays className="h-4 w-4 shrink-0" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em]">{copy.calculator.registration}</h3>
                </div>
                <p className="text-sm font-light leading-7 text-slate-300">{copy.calculator.registrationText}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-slate-800 bg-slate-950 p-5 sm:p-7">
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                    {copy.calculator.downPayment}
                  </p>
                  <p className="text-3xl font-serif text-emerald-400 sm:text-4xl">BDT {formatCurrency(downPayment)}</p>
                  <p className="mt-1 text-xs text-slate-500">{isBn ? 'মোট মূল্যের ৩৩%' : '33% of the estimated price'}</p>
                </div>

                <div className="h-px w-full bg-slate-800" />

                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                    {copy.calculator.remaining}
                  </p>
                  <p className="text-2xl font-serif text-white sm:text-3xl">BDT {formatCurrency(remainingBalance)}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {isBn
                      ? 'বাকি অর্থ পরিশোধের সময়সূচি বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
                      : 'Confirm the remaining payment schedule with the sales team.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openInquiry(`${isBn ? 'আনুমানিক মূল্য' : 'Estimated price'}: BDT ${formatCurrency(estimatedPrice)}; ${isBn ? '৩৩% ডাউন পেমেন্ট' : '33% down payment'}: BDT ${formatCurrency(downPayment)}`)}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-emerald-800 px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-emerald-700 sm:tracking-[0.15em]"
              >
                <Calculator className="h-4 w-4" />
                {copy.calculator.ask}
              </button>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-4xl text-center text-xs font-light leading-6 text-slate-500">
            {copy.calculator.note}
          </p>
        </div>
      </motion.section>

      {/* Final inquiry call-to-action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
        className="flex w-full flex-col items-center bg-slate-50 px-5 py-20 text-center text-slate-950 sm:px-6 md:py-28"
      >
        <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
          {t.cta.badge}
        </span>
        <h2 className="mb-6 max-w-4xl text-3xl font-serif leading-tight tracking-tight sm:text-4xl md:text-6xl">
          {t.cta.title}
        </h2>
        <p className="mb-9 max-w-2xl text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8 md:mb-12">
          {t.cta.subtitle}
        </p>
        <button
          type="button"
          onClick={() => openInquiry(isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society')}
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-slate-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-emerald-900 sm:px-10 sm:tracking-[0.18em]"
        >
          {t.cta.btn}
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.section>

      {/* WhatsApp inquiry modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsModalOpen(false);
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="inquiry-modal-title"
              initial={{ scale: shouldReduceMotion ? 1 : 0.97, opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: shouldReduceMotion ? 1 : 0.98, opacity: 0 }}
              className="relative max-h-[90svh] w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl sm:p-9"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label={copy.modal.close}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 id="inquiry-modal-title" className="mb-3 pr-8 text-2xl font-serif tracking-tight text-slate-950 sm:text-3xl">
                {copy.modal.title}
              </h3>
              <p className="mb-6 text-sm font-light leading-6 text-slate-600">{copy.modal.prompt}</p>

              <div className="mb-6 border-l-2 border-emerald-700 bg-emerald-50 px-4 py-3">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-900">{copy.modal.topic}</p>
                <p className="break-words text-sm font-medium text-slate-900">{selectedInquiry}</p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim();
                  if (!name || !phone) return;

                  const message = isBn
                    ? `হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমার নাম ${name}। আমার ফোন নম্বর ${phone}। আমি ${selectedInquiry} সম্পর্কে বিস্তারিত জানতে আগ্রহী।`
                    : `Hello 3S Land Developers, my name is ${name}. My phone number is ${phone}. I would like more information about: ${selectedInquiry}.`;

                  const url = `https://wa.me/8801835105772?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank', 'noopener,noreferrer');
                  setIsModalOpen(false);
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="inquiry-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-800">
                    {copy.modal.name}
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder={copy.modal.namePlaceholder}
                    className="min-h-12 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-800"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-phone" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-800">
                    {copy.modal.phone}
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    placeholder={copy.modal.phonePlaceholder}
                    className="min-h-12 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-emerald-800"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-slate-950 px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-emerald-900 sm:tracking-[0.15em]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {copy.modal.submit}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
