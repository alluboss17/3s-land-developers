'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Ruler,
  Images,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projectsPage;
  const isBn = language === 'bn';
  const reduceMotion = useReducedMotion() ?? false;

  const projectImages = [
    {
      src: '/images/wide.jpg',
      alt: isBn ? 'গাছঘেরা প্রবেশপথ' : 'Tree-lined site access',
    },
    {
      src: '/images/site-3.jpg',
      alt: isBn ? 'অভ্যন্তরীণ রাস্তার উন্নয়ন' : 'Internal road development',
    },
    {
      src: '/images/action.jpg',
      alt: isBn ? 'প্রকল্প এলাকায় ভারী যন্ত্রপাতি' : 'Heavy machinery at the project site',
    },
  ];

  const projectHighlights = [
    {
      icon: MapPin,
      title: isBn ? 'অবস্থান' : 'Location',
      detail: isBn
        ? 'সাইটের সুনির্দিষ্ট অবস্থান বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
        : 'Confirm the precise site location with the sales team.',
    },
    {
      icon: Ruler,
      title: isBn ? 'প্লটের বিকল্প' : 'Plot options',
      detail: isBn
        ? 'বর্তমানে কোন আয়তনের প্লট পাওয়া যাচ্ছে তা জেনে নিন।'
        : 'Ask which plot sizes are currently available.',
    },
    {
      icon: Images,
      title: isBn ? 'উন্নয়নের অগ্রগতি' : 'Development progress',
      detail: isBn
        ? 'সাইটের ছবি দেখুন এবং বর্তমান কাজ সম্পর্কে জানতে চান।'
        : 'Review site photos and ask about current work on the ground.',
    },
  ];

  const whatsappUrl = `https://wa.me/8801835105772?text=${encodeURIComponent(
    isBn
      ? 'হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমি অবকাশ লেক ভিউ সোসাইটির প্লট ও বর্তমান প্রাপ্যতা সম্পর্কে জানতে চাই।'
      : 'Hello 3S Land Developers, I would like information about plots and current availability at Abakash Lake View Society.'
  )}`;

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-900 selection:text-white">
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 sm:py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300 sm:text-xs sm:tracking-[0.3em]">
            <span className="h-px w-8 bg-emerald-400" />
            {t.badge}
          </span>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-12">
            <h1 className="text-4xl font-serif leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
              {t.title}
            </h1>

            <p className="max-w-xl text-sm font-light leading-7 text-slate-300 sm:text-base sm:leading-8">
              {t.description}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <motion.article
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/[0.035]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative aspect-[4/3] min-h-0 overflow-hidden bg-slate-200 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[530px]">
                <Image
                  src="/images/wide.jpg"
                  alt={
                    isBn
                      ? 'অবকাশ লেক ভিউ সোসাইটির সাইটের দৃশ্য'
                      : 'Site view at Abakash Lake View Society'
                  }
                  fill
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/5" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <span className="mb-2 inline-flex border border-white/30 bg-slate-950/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-[10px]">
                      {isBn ? 'বর্তমানে প্রদর্শিত প্রকল্প' : 'Featured development'}
                    </span>

                    <h2 className="text-2xl font-serif leading-tight text-white sm:text-3xl md:text-4xl">
                      {isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society'}
                    </h2>
                  </div>

                  <span className="text-xs font-medium text-white/85">
                    {isBn ? '৩এস ল্যান্ড ডেভেলপারস' : '3S Land Developers'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-12">
                <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-xs sm:tracking-[0.26em]">
                  {isBn ? 'প্রকল্পের পরিচিতি' : 'Project overview'}
                </span>

                <p className="text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {isBn
                    ? 'অবকাশ লেক ভিউ সোসাইটি সম্পর্কে সরাসরি তথ্য নিন। প্লটের আয়তন, সাইটের অবস্থান, বর্তমান উন্নয়ন কার্যক্রম, নকশা ও পেমেন্টের শর্ত বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
                    : 'Get project-specific information about Abakash Lake View Society. Confirm plot sizes, the precise site location, current development progress, the official layout, and payment terms directly with the sales team.'}
                </p>

                <div className="my-7 space-y-5 border-y border-slate-200 py-6">
                  {projectHighlights.map(({ icon: Icon, title, detail }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-emerald-900/15 bg-emerald-50 text-emerald-900">
                        <Icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          {title}
                        </h3>
                        <p className="mt-1 text-sm font-light leading-6 text-slate-600">
                          {detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-emerald-800 px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-emerald-700 sm:tracking-[0.14em]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t.inquireNow}
                  </a>

                  <Link
                    href="/gallery"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 border border-slate-300 px-5 py-4 text-xs font-bold uppercase tracking-[0.1em] text-slate-900 transition-colors hover:border-slate-900 hover:bg-slate-50 sm:tracking-[0.14em]"
                  >
                    {isBn ? 'সাইটের ছবি' : 'Site photos'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  {isBn
                    ? 'নকশা, মূল্য ও প্রাপ্যতার তথ্য বিক্রয় দলের কাছ থেকে নিশ্চিত না হওয়া পর্যন্ত এই পৃষ্ঠায় অনুমানভিত্তিক বিবরণ প্রকাশ করা হয়নি।'
                    : 'Unconfirmed layout, pricing, and availability details are intentionally not presented as facts on this page.'}
                </p>
              </div>
            </div>
          </motion.article>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="relative aspect-[4/3] overflow-hidden bg-slate-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}