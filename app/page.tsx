'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Landmark,
  MessageCircle,
  Route,
  ShieldCheck,
  Square,
  Trees,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const HERO_IMAGES = [
  '/images/wide.jpg',
  '/images/site-2.jpg',
  '/images/board.jpg',
  '/images/site-3.jpg',
];

const PLOT_SIZES = [3, 4, 5, 10, 15, 20, 30, 40, 50, '70+'] as const;

// Indicative range supplied by the client: BDT 20–60 lakh.
// These numbers are not quotations for individual plots.
const MIN_PLOT_PRICE = 2_000_000;
const MAX_PLOT_PRICE = 6_000_000;
const PLOT_PRICE_STEP = 500_000;
const DOWN_PAYMENT_RATE = 0.33;

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const isBn = language === 'bn';
  const reduceMotion = useReducedMotion() ?? false;

  const [heroIndex, setHeroIndex] = useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(3_000_000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState('');

  const downPayment = Math.round(estimatedPrice * DOWN_PAYMENT_RATE);
  const remainingBalance = estimatedPrice - downPayment;

  // Automatically rotate the hero images unless reduced motion is preferred.
  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  // Allow visitors to close the inquiry dialog using Escape.
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
    heroBadge: isBn
      ? 'অবকাশ লেক ভিউ সোসাইটি'
      : 'Abakash Lake View Society',

    heroPrimary: isBn
      ? 'প্রকল্পের বিস্তারিত জানুন'
      : 'Explore the project',

    heroSecondary: isBn
      ? 'প্রকল্পের ছবি দেখুন'
      : 'View project photos',

    heroLocation: isBn
      ? 'আটিবাজার, কেরানীগঞ্জ মডেল, ঢাকা-১৩১২'
      : 'Atibazar, Keraniganj Model, Dhaka-1312',

    heroAlt: isBn
      ? 'অবকাশ লেক ভিউ সোসাইটির প্রকল্প এলাকা'
      : 'Abakash Lake View Society project site',

    scrollLabel: isBn ? 'আরও জানুন' : 'Discover more',

    metrics: [
      {
        value: '20+',
        label: isBn ? 'বছরের অভিজ্ঞতা' : 'Years of experience',
      },
      {
        value: '100%',
        label: isBn ? 'আইনগত যাচাই' : 'Legal compliance',
      },
      {
        value: '99+',
        label: isBn ? 'একর উন্নয়নকৃত জমি' : 'Acres developed',
      },
      {
        value: '300+',
        label: isBn ? 'হস্তান্তরিত প্লট' : 'Plots handed over',
      },
    ],

    story: {
      eyebrow: isBn ? 'আমাদের অভিজ্ঞতা' : 'Experience you can build on',

      link: isBn
        ? '৩এস সম্পর্কে আরও জানুন'
        : 'Discover 3S Land Developers',

      imageAlt: isBn
        ? 'প্রকল্প এলাকায় ভূমি উন্নয়নের ছবি'
        : 'Land development at the project site',
    },

    plotSection: {
      title: isBn
        ? 'আপনার পরিকল্পনার জন্য সঠিক প্লট খুঁজুন'
        : 'Find a plot that fits your plans',

      subtitle: isBn
        ? 'প্লটের আয়তন, অবস্থান, রাস্তার সংযোগ ও অন্যান্য বৈশিষ্ট্যের ভিত্তিতে মূল্য ও প্রাপ্যতা ভিন্ন হতে পারে। বর্তমান তথ্য বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Price and availability can vary by plot size, location, road access, and other features. Contact the sales team for current information.',

      note: isBn
        ? 'নিচে দেখানো আয়তনগুলো সম্পর্কে অনুসন্ধান করতে পারেন। এগুলো বর্তমান প্রাপ্যতার নিশ্চয়তা নয়।'
        : 'You can inquire about the plot sizes below. Their display does not guarantee current availability.',

      inquire: isBn
        ? 'এই আয়তন সম্পর্কে জানুন'
        : 'Ask about this size',
    },

    planning: {
      eyebrow: isBn ? 'পরিকল্পিত কমিউনিটি' : 'Planned communities',

      title: isBn
        ? 'একটি পরিকল্পিত আবাসনের গুরুত্বপূর্ণ বিষয়'
        : 'The details that shape a planned community',

      subtitle: isBn
        ? 'রাস্তা, খোলা জায়গা ও কমিউনিটি সুবিধার চূড়ান্ত তথ্য অবকাশ লেক ভিউ সোসাইটির অফিসিয়াল নকশা থেকে নিশ্চিত করা হবে।'
        : 'The final roads, open spaces, and community facilities for Abakash Lake View Society must be confirmed against the official project layout.',

      cards: [
        {
          title: isBn ? 'রাস্তার নেটওয়ার্ক' : 'Road network',
          detail: isBn
            ? 'নকশা অনুযায়ী রাস্তা ও প্রবেশপথ।'
            : 'Roads and access according to the official layout.',
          Icon: Route,
        },
        {
          title: isBn ? 'খোলা জায়গা ও সবুজায়ন' : 'Open spaces and greenery',
          detail: isBn
            ? 'পরিকল্পনায় থাকলে পার্ক ও সবুজ এলাকা।'
            : 'Parks and green spaces where included in the plan.',
          Icon: Trees,
        },
        {
          title: isBn ? 'কমিউনিটি সুবিধা' : 'Community facilities',
          detail: isBn
            ? 'মসজিদ, স্কুল বা অন্যান্য সুবিধা—নকশা অনুযায়ী।'
            : 'Mosques, schools, and other facilities where confirmed by the plan.',
          Icon: Landmark,
        },
        {
          title: isBn ? 'নিরাপত্তা ও ব্যবস্থাপনা' : 'Security and management',
          detail: isBn
            ? 'প্রকল্পে প্রযোজ্য নিরাপত্তা ও ব্যবস্থাপনা।'
            : 'Security and management arrangements applicable to the project.',
          Icon: ShieldCheck,
        },
      ],
    },

    gallery: {
      label: isBn ? 'প্রকল্পের ছবি' : 'Project photo',

      imageAlt: (index: number) =>
        isBn
          ? `অবকাশ লেক ভিউ সোসাইটির ছবি ${index + 1}`
          : `Abakash Lake View Society photo ${index + 1}`,
    },

    calculator: {
      eyebrow: isBn
        ? 'বিনিয়োগের প্রাথমিক হিসাব'
        : 'Investment planning',

      title: isBn
        ? 'প্লটের মূল্য ও ডাউন পেমেন্ট হিসাব'
        : 'Plot price & down payment estimator',

      subtitle: isBn
        ? 'প্রদত্ত ২০–৬০ লাখ টাকার আনুমানিক মূল্যসীমার মধ্যে একটি মূল্য বেছে নিন। নির্দিষ্ট প্লটের চূড়ান্ত মূল্য বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Choose an indicative price within the reported BDT 20–60 lakh range. Confirm the final price of a specific plot with the sales team.',

      selectedPrice: isBn
        ? 'আনুমানিক প্লটের মূল্য'
        : 'Estimated plot price',

      downPayment: isBn
        ? '৩৩% ডাউন পেমেন্ট'
        : '33% down payment',

      remaining: isBn
        ? 'অবশিষ্ট মূল্য (৬৭%)'
        : 'Remaining balance (67%)',

      registration: isBn
        ? 'রেজিস্ট্রেশনের শর্ত'
        : 'Registration condition',

      registrationText: isBn
        ? 'ডাউন পেমেন্ট পরিকল্পনায় ৩–৬ মাসের মধ্যে রেজিস্ট্রেশন সম্পন্ন করতে হবে। সঠিক সময়সীমা ও চুক্তির শর্ত বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Under the down-payment plan, registration must be completed within 3–6 months. Confirm the exact deadline and contractual terms with the sales team.',

      note: isBn
        ? 'এটি একটি প্রাথমিক হিসাব, নির্দিষ্ট প্লটের অফার নয়। অবশিষ্ট অর্থ পরিশোধের সময়সূচি, ফি ও অন্যান্য শর্ত বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'This is an illustrative estimate, not a plot-specific offer. Confirm the remaining payment schedule, fees, and other terms with the sales team.',

      minimum: isBn ? '২০ লাখ টাকা' : 'BDT 20 lakh',
      maximum: isBn ? '৬০ লাখ টাকা' : 'BDT 60 lakh',

      ask: isBn
        ? 'এই হিসাব সম্পর্কে জিজ্ঞাসা করুন'
        : 'Ask about this estimate',
    },

    modal: {
      title: isBn
        ? 'প্লট সম্পর্কে বিস্তারিত জানুন'
        : 'Request plot details',

      prompt: isBn
        ? 'আপনার তথ্য দিন। এরপর হোয়াটসঅ্যাপে বার্তা তৈরি হবে।'
        : 'Add your details. The next step will prepare a WhatsApp message.',

      topic: isBn ? 'আপনার আগ্রহের বিষয়' : 'Your inquiry',

      name: isBn ? 'পূর্ণ নাম' : 'Full name',

      namePlaceholder: isBn
        ? 'আপনার নাম লিখুন'
        : 'Enter your name',

      phone: isBn
        ? 'ফোন / হোয়াটসঅ্যাপ নম্বর'
        : 'Phone / WhatsApp number',

      phonePlaceholder: '+880 1XXXXXXXXX',

      submit: isBn
        ? 'হোয়াটসঅ্যাপে যোগাযোগ করুন'
        : 'Continue to WhatsApp',

      close: isBn ? 'বন্ধ করুন' : 'Close',
    },

    cta: {
      eyebrow: isBn ? 'পরবর্তী পদক্ষেপ' : 'Your next step',

      title: isBn
        ? 'অবকাশ লেক ভিউ সোসাইটি সম্পর্কে জানুন'
        : 'Take the next step with Abakash Lake View Society',

      description: isBn
        ? 'প্লটের প্রাপ্যতা, মূল্য, নকশা এবং সাইট পরিদর্শন সম্পর্কে জানতে আমাদের দলের সাথে যোগাযোগ করুন।'
        : 'Contact the team to ask about plot availability, pricing, the project layout, and arranging a site visit.',

      button: isBn
        ? 'প্রকল্প সম্পর্কে যোগাযোগ করুন'
        : 'Enquire about the project',
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
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white text-slate-900 selection:bg-emerald-900 selection:text-white">
      {/* Floating WhatsApp action */}
      <a
        href={generalWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isBn ? 'হোয়াটসঅ্যাপে যোগাযোগ করুন' : 'Contact on WhatsApp'}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-emerald-700 text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      {/* Cinematic hero */}
      <section className="relative flex min-h-[85svh] w-full items-center justify-center overflow-hidden bg-slate-950 py-20 text-center text-white sm:py-24 md:min-h-[88vh] md:py-28">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={HERO_IMAGES[heroIndex]}
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.035 }}
              animate={{ opacity: 1, scale: reduceMotion ? 1 : 1.09 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: {
                  duration: reduceMotion ? 0 : 1.15,
                  ease: 'easeInOut',
                },
                scale: {
                  duration: reduceMotion ? 0 : 6.5,
                  ease: 'linear',
                },
              }}
              className="absolute inset-0"
            >
              <Image
                src={HERO_IMAGES[heroIndex]}
                alt={copy.heroAlt}
                fill
                priority={heroIndex === 0}
                quality={85}
                sizes="100vw"
                className="object-cover object-[center_62%] sm:object-center"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/45 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-transparent to-slate-950/20" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-4 sm:px-6 md:pt-8">
          <motion.span
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-slate-950/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-sm sm:mb-8 sm:text-xs sm:tracking-[0.28em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            {copy.heroBadge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.1,
            }}
            className="mb-6 max-w-4xl text-4xl font-serif leading-[1.12] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl"
          >
            {t.hero.title1}
            <br className="hidden md:block" />
            <span className="mt-1 block font-light italic text-slate-200 md:mt-2">
              {t.hero.title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="mb-9 max-w-2xl text-sm font-light leading-7 text-slate-200 sm:text-base sm:leading-8 md:mb-11 md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="flex w-full max-w-lg flex-col justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <button
              type="button"
              onClick={() =>
                openInquiry(
                  isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society'
                )
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition duration-300 hover:bg-emerald-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-8 sm:tracking-[0.18em]"
            >
              {copy.heroPrimary}
              <ArrowRight className="h-4 w-4" />
            </button>

            <Link
              href="/gallery"
              className="inline-flex min-h-12 items-center justify-center border border-white/55 bg-slate-950/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white/10 sm:px-8 sm:tracking-[0.18em]"
            >
              {copy.heroSecondary}
            </Link>
          </motion.div>

          {/* Hero image indicators */}
          <div
            className="mt-8 flex items-center gap-2.5"
            aria-label={isBn ? 'প্রকল্পের ছবি নির্বাচন করুন' : 'Choose project image'}
          >
            {HERO_IMAGES.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setHeroIndex(index)}
                aria-label={
                  isBn
                    ? `প্রকল্পের ছবি ${index + 1} দেখুন`
                    : `Show project image ${index + 1}`
                }
                aria-pressed={heroIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  heroIndex === index
                    ? 'w-8 bg-emerald-300'
                    : 'w-2 bg-white/55 hover:bg-white'
                }`}
              />
            ))}
          </div>

          <p className="mt-4 text-[10px] tracking-wide text-white/80 sm:text-xs">
            {copy.heroLocation}
          </p>

          {!reduceMotion && (
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-7 hidden items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/65 md:flex"
            >
              {copy.scrollLabel}
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Company statistics */}
      <section className="relative z-20 w-full border-b border-white/10 bg-slate-950 px-5 py-10 text-white sm:px-6 md:py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4 md:gap-6">
          {copy.metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : index * 0.07,
              }}
              className="flex min-h-28 flex-col items-center justify-center border border-white/10 bg-white/[0.025] px-3 py-5 text-center transition-colors duration-300 hover:border-emerald-500/35 hover:bg-white/[0.045] sm:min-h-32 sm:px-5"
            >
              <div className="text-3xl font-serif font-light tracking-tight text-white sm:text-4xl">
                {item.value}
              </div>
              <div className="mt-3 max-w-[13rem] text-[10px] font-medium leading-5 tracking-[0.06em] text-slate-400 sm:text-xs sm:tracking-[0.1em]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company story */}
      <motion.section
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduceMotion ? 0 : 0.75 }}
        className="w-full bg-white px-5 py-20 sm:px-6 md:py-28"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/wide.jpg"
                alt={copy.story.imageAlt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 right-4 border border-white/20 bg-slate-950 px-5 py-4 text-white shadow-xl sm:bottom-6 sm:-right-5 sm:px-7 sm:py-6">
              <div className="text-3xl font-serif sm:text-4xl">20+</div>
              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-300 sm:text-[10px]">
                {isBn ? 'বছরের অভিজ্ঞতা' : 'Years of experience'}
              </div>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
              {t.about.badge}
            </span>

            <h2 className="mb-7 text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              {t.about.title}
            </h2>

            <div className="space-y-5 text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-emerald-800/40 pb-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-900 transition-colors hover:border-emerald-700 hover:text-emerald-700 sm:tracking-[0.16em]"
            >
              {copy.story.link}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Plot size inquiries */}
      <motion.section
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduceMotion ? 0 : 0.75 }}
        className="w-full border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-9 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
                {t.plots.badge}
              </span>

              <h2 className="text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                {copy.plotSection.title}
              </h2>
            </div>

            <p className="max-w-xl text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
              {copy.plotSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:grid-cols-5">
            {PLOT_SIZES.map((size, index) => (
              <motion.button
                key={size}
                type="button"
                onClick={() =>
                  openInquiry(`${size} ${isBn ? 'কাঠা' : 'Katha'}`)
                }
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion ? 0 : index * 0.035,
                }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="group flex min-h-28 flex-col items-center justify-center bg-white px-3 py-6 text-center transition-colors duration-300 hover:bg-emerald-50 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-700 sm:min-h-32 sm:py-8"
              >
                <Square
                  className="mb-3 h-4 w-4 text-emerald-800/70 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />

                <span className="text-lg font-serif text-slate-800 transition-colors group-hover:text-emerald-900 sm:text-xl">
                  {size} {isBn ? 'কাঠা' : 'Katha'}
                </span>

                <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.09em] text-slate-400 sm:text-[10px]">
                  {copy.plotSection.inquire}
                </span>
              </motion.button>
            ))}
          </div>

          <p className="mt-4 text-xs font-light leading-6 text-slate-500">
            {copy.plotSection.note}
          </p>
        </div>
      </motion.section>

      {/* Planning priorities — facilities must be confirmed from the noksha */}
      <motion.section
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduceMotion ? 0 : 0.75 }}
        className="w-full bg-white px-5 py-20 text-center sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-3xl">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
            {copy.planning.eyebrow}
          </span>

          <h2 className="mb-6 text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            {copy.planning.title}
          </h2>

          <p className="text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
            {copy.planning.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-4 md:gap-6">
          {copy.planning.cards.map(({ title, detail, Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              className="group flex flex-col items-center border border-slate-200 bg-slate-50 px-5 py-7 transition-colors duration-300 hover:border-emerald-800/30 hover:bg-emerald-50/50 sm:px-6 sm:py-8"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 group-hover:border-emerald-800/30 group-hover:bg-emerald-900 group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              <h3 className="mb-2 text-lg font-serif text-slate-950">
                {title}
              </h3>

              <p className="text-sm font-light leading-6 text-slate-600">
                {detail}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Responsive photo gallery */}
      <section className="w-full bg-slate-950 pt-20 text-white md:pt-24">
        <div className="mx-auto mb-9 flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:mb-12 md:flex-row md:items-end md:justify-between">
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

        <div className="grid grid-cols-1 gap-px bg-slate-800 sm:grid-cols-2 lg:h-[460px] lg:grid-cols-4">
          {HERO_IMAGES.slice().reverse().map((image, index) => (
            <Link
              key={image}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400 sm:aspect-[5/4] lg:aspect-auto lg:h-full"
            >
              <Image
                src={image}
                alt={copy.gallery.imageAlt(index)}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover object-center transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 sm:bottom-5 sm:left-5">
                {copy.gallery.label} 0{index + 1}
              </span>

              <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center border border-white/35 bg-slate-950/25 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Price and down-payment estimator */}
      <motion.section
        initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: reduceMotion ? 0 : 0.75 }}
        className="w-full border-t border-slate-900 bg-slate-950 px-5 py-20 text-white sm:px-6 md:py-28"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-400 sm:text-xs sm:tracking-[0.3em]">
              {copy.calculator.eyebrow}
            </span>

            <h2 className="mb-5 text-3xl font-serif leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {copy.calculator.title}
            </h2>

            <p className="text-sm font-light leading-7 text-slate-400 sm:text-base sm:leading-8">
              {copy.calculator.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 border border-slate-800 bg-slate-900 p-4 sm:gap-6 sm:p-7 md:grid-cols-2 md:gap-8 md:p-9">
            <div className="flex flex-col p-2 sm:p-3">
              <label
                htmlFor="plot-price"
                className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300"
              >
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
                step={PLOT_PRICE_STEP}
                value={estimatedPrice}
                onChange={(event) =>
                  setEstimatedPrice(Number(event.target.value))
                }
                aria-valuetext={`BDT ${formatCurrency(estimatedPrice)}`}
                className="h-2 w-full cursor-pointer accent-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              />

              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-400">
                <span>{copy.calculator.minimum}</span>
                <span>{copy.calculator.maximum}</span>
              </div>

              <div className="mt-8 border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-2 text-emerald-300">
                  <CalendarDays className="h-4 w-4 shrink-0" />

                  <h3 className="text-xs font-bold uppercase tracking-[0.12em]">
                    {copy.calculator.registration}
                  </h3>
                </div>

                <p className="text-sm font-light leading-7 text-slate-300">
                  {copy.calculator.registrationText}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-slate-800 bg-slate-950 p-5 sm:p-7">
              <div className="space-y-6 sm:space-y-7">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                    {copy.calculator.downPayment}
                  </p>

                  <p className="text-3xl font-serif text-emerald-400 sm:text-4xl">
                    BDT {formatCurrency(downPayment)}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {isBn
                      ? 'মোট মূল্যের ৩৩%'
                      : '33% of the estimated price'}
                  </p>
                </div>

                <div className="h-px w-full bg-slate-800" />

                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                    {copy.calculator.remaining}
                  </p>

                  <p className="text-2xl font-serif text-white sm:text-3xl">
                    BDT {formatCurrency(remainingBalance)}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {isBn
                      ? 'বাকি অর্থ পরিশোধের সময়সূচি বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
                      : 'Confirm the remaining payment schedule with the sales team.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  openInquiry(
                    `${isBn ? 'আনুমানিক মূল্য' : 'Estimated price'}: BDT ${formatCurrency(estimatedPrice)}; ${
                      isBn ? '৩৩% ডাউন পেমেন্ট' : '33% down payment'
                    }: BDT ${formatCurrency(downPayment)}`
                  )
                }
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-emerald-800 px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:tracking-[0.15em]"
              >
                {copy.calculator.ask}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-4xl text-center text-xs font-light leading-6 text-slate-500">
            {copy.calculator.note}
          </p>
        </div>
      </motion.section>

      {/* Final inquiry section */}
      <motion.section
        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.7 }}
        className="flex w-full flex-col items-center bg-slate-50 px-5 py-20 text-center text-slate-950 sm:px-6 md:py-28"
      >
        <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
          {copy.cta.eyebrow}
        </span>

        <h2 className="mb-6 max-w-4xl text-3xl font-serif leading-tight tracking-tight sm:text-4xl md:text-6xl">
          {copy.cta.title}
        </h2>

        <p className="mb-9 max-w-2xl text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8 md:mb-12">
          {copy.cta.description}
        </p>

        <button
          type="button"
          onClick={() =>
            openInquiry(
              isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society'
            )
          }
          className="inline-flex min-h-12 items-center justify-center gap-3 bg-slate-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:px-10 sm:tracking-[0.18em]"
        >
          {copy.cta.button}
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
              if (event.target === event.currentTarget) {
                setIsModalOpen(false);
              }
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="inquiry-modal-title"
              initial={{
                scale: reduceMotion ? 1 : 0.97,
                opacity: 0,
                y: reduceMotion ? 0 : 10,
              }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{
                scale: reduceMotion ? 1 : 0.98,
                opacity: 0,
              }}
              className="relative max-h-[90svh] w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl sm:p-9"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label={copy.modal.close}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <X className="h-5 w-5" />
              </button>

              <h3
                id="inquiry-modal-title"
                className="mb-3 pr-8 text-2xl font-serif tracking-tight text-slate-950 sm:text-3xl"
              >
                {copy.modal.title}
              </h3>

              <p className="mb-6 text-sm font-light leading-6 text-slate-600">
                {copy.modal.prompt}
              </p>

              <div className="mb-6 border-l-2 border-emerald-700 bg-emerald-50 px-4 py-3">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-900">
                  {copy.modal.topic}
                </p>

                <p className="break-words text-sm font-medium text-slate-900">
                  {selectedInquiry}
                </p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();

                  const form = event.currentTarget;

                  const name = (
                    form.elements.namedItem('name') as HTMLInputElement
                  ).value.trim();

                  const phone = (
                    form.elements.namedItem('phone') as HTMLInputElement
                  ).value.trim();

                  if (!name || !phone) return;

                  const message = isBn
                    ? `হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমার নাম ${name}। আমার ফোন নম্বর ${phone}। আমি ${selectedInquiry} সম্পর্কে বিস্তারিত জানতে আগ্রহী।`
                    : `Hello 3S Land Developers, my name is ${name}. My phone number is ${phone}. I would like more information about: ${selectedInquiry}.`;

                  window.open(
                    `https://wa.me/8801835105772?text=${encodeURIComponent(message)}`,
                    '_blank',
                    'noopener,noreferrer'
                  );

                  setIsModalOpen(false);
                }}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-800"
                  >
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
                  <label
                    htmlFor="inquiry-phone"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-800"
                  >
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
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-slate-950 px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:tracking-[0.15em]"
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