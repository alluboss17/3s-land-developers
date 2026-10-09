'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  Clock3,
  Trees,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].aboutPage;
  const isBn = language === 'bn';
  const reduceMotion = useReducedMotion() ?? false;

  const values = [
    {
      icon: Clock3,
      title: t.pillars.historyTitle,
      description: t.pillars.historyDesc,
    },
    {
      icon: FileCheck2,
      title: t.pillars.legalTitle,
      description: t.pillars.legalDesc,
    },
    {
      icon: Trees,
      title: t.pillars.investmentTitle,
      description: t.pillars.investmentDesc,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-900 selection:text-white">
      {/* Editorial hero */}
      <section className="relative isolate overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-6 sm:py-28 md:py-36">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/wide.jpg"
            alt={
              isBn
                ? 'উন্নয়ন এলাকার প্রবেশপথ'
                : 'Access area within the development site'
            }
            fill
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="max-w-4xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300 sm:text-xs sm:tracking-[0.3em]">
              <span className="h-px w-8 bg-emerald-400" />
              {t.badge}
            </span>

            <h1 className="mb-7 text-4xl font-serif leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
              {t.title1}{' '}
              <span className="font-light italic text-slate-300">
                {t.title2}
              </span>
            </h1>

            <p className="max-w-2xl text-sm font-light leading-7 text-slate-300 sm:text-base sm:leading-8">
              {t.intro}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center gap-3 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition-colors hover:bg-emerald-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:tracking-[0.18em]"
            >
              {isBn ? 'যোগাযোগ করুন' : 'Talk to our team'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company background */}
      <section className="px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.65 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 sm:aspect-[5/4]">
              <Image
                src="/images/site-1.jpg"
                alt={
                  isBn
                    ? 'জমি প্রস্তুতি ও উন্নয়ন কার্যক্রম'
                    : 'Land preparation and development work'
                }
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-4 right-4 border border-white/20 bg-slate-950 px-5 py-4 text-white shadow-xl sm:bottom-6 sm:-right-5 sm:px-7 sm:py-6">
              <div className="text-3xl font-serif sm:text-4xl">20+</div>
              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-300 sm:text-[10px]">
                {isBn ? 'বছরের অভিজ্ঞতা' : 'Years of experience'}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.08,
            }}
          >
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
              {isBn ? 'প্রতিষ্ঠানের পরিচিতি' : 'Who we are'}
            </span>

            <h2 className="mb-6 text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              {isBn
                ? 'জমি উন্নয়ন থেকে পরিকল্পিত আবাসন'
                : 'From land preparation to planned communities'}
            </h2>

            <p className="text-sm font-light leading-7 text-slate-600 sm:text-base sm:leading-8">
              {t.description}
            </p>

            <p className="mt-5 border-l-2 border-emerald-700 pl-4 text-xs leading-6 text-slate-500 sm:text-sm">
              {isBn
                ? 'সম্পত্তি কেনার আগে সংশ্লিষ্ট জমির নথি, প্রযোজ্য অনুমোদন, চুক্তি ও হস্তান্তরের শর্ত স্বাধীনভাবে যাচাই করুন।'
                : 'Before purchasing property, independently review the relevant land documents, applicable approvals, contract, and handover terms.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company principles */}
      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl md:mb-14">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 sm:text-xs sm:tracking-[0.3em]">
              {isBn ? 'আমাদের কাজের মূলনীতি' : 'How we work'}
            </span>

            <h2 className="text-3xl font-serif leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              {isBn
                ? 'বিশ্বাস, যাচাই ও পরিকল্পনা'
                : 'Trust, verification, and planning'}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.07,
                }}
                className="group border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-emerald-900/15 bg-emerald-50 text-emerald-900 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>

                <h3 className="mb-3 text-xl font-serif text-slate-950 sm:text-2xl">
                  {title}
                </h3>

                <p className="text-sm font-light leading-7 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif leading-tight sm:text-4xl">
              {isBn
                ? 'অবকাশ লেক ভিউ সোসাইটি সম্পর্কে জানুন'
                : 'Learn more about Abakash Lake View Society'}
            </h2>

            <p className="mt-3 text-sm font-light leading-7 text-slate-400 sm:text-base">
              {isBn
                ? 'প্লট, নকশা ও সাইট পরিদর্শন সম্পর্কে বিক্রয় দলের সাথে কথা বলুন।'
                : 'Ask the sales team about plots, the layout, and arranging a site visit.'}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-emerald-800 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-emerald-700 sm:tracking-[0.16em]"
          >
            {isBn ? 'যোগাযোগ করুন' : 'Contact us'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}