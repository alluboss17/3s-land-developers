'use client';

import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { translations } from '@/lib/translations';

interface HeroSearchProps {
  lang: 'en' | 'bn';
}

export default function HeroSearch({ lang }: HeroSearchProps) {
  const [plotSize, setPlotSize] = useState('');
  const [plotType, setPlotType] = useState('');
  const reduceMotion = useReducedMotion() ?? false;
  const isBn = lang === 'bn';
  const t = translations[lang].search;

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = isBn
      ? `হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমি অবকাশ লেক ভিউ সোসাইটির প্লট সম্পর্কে জানতে চাই। প্লটের আয়তন: ${plotSize || 'যেকোনো আয়তন'}। ধরন: ${plotType || 'যেকোনো ধরন'}।`
      : `Hello 3S Land Developers, I would like to ask about plots at Abakash Lake View Society. Plot size: ${plotSize || 'Any size'}. Plot type: ${plotType || 'Any type'}.`;

    window.open(
      `https://wa.me/8801835105772?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <motion.form
      onSubmit={submitInquiry}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.55 }}
      className="w-full border border-white/15 bg-slate-950/85 p-4 text-left shadow-2xl backdrop-blur-xl sm:p-6 md:p-8"
    >
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
            {isBn ? 'অবকাশ লেক ভিউ সোসাইটি' : 'Abakash Lake View Society'}
          </p>

          <h2 className="mt-2 text-lg font-serif text-white sm:text-xl">
            {isBn ? 'প্লট সম্পর্কে অনুসন্ধান করুন' : 'Enquire about plot options'}
          </h2>
        </div>

        <p className="text-xs font-light leading-5 text-slate-400">
          {isBn
            ? 'বর্তমান প্রাপ্যতা বিক্রয় দলের কাছ থেকে নিশ্চিত করুন।'
            : 'Confirm current availability with the sales team.'}
        </p>
      </div>

      <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-[1fr_1fr_auto]">
        <div className="flex flex-col">
          <label
            htmlFor="hero-plot-size"
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
          >
            {t.sizeLabel}
          </label>

          <select
            id="hero-plot-size"
            className="min-h-12 w-full border border-white/15 bg-slate-900 px-3 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400"
            value={plotSize}
            onChange={(event) => setPlotSize(event.target.value)}
          >
            <option value="" className="bg-slate-950">
              {t.anySize}
            </option>

            {['3', '4', '5', '10', '15', '20', '30', '40', '50', '70+'].map(
              (size) => (
                <option key={size} value={size} className="bg-slate-950">
                  {size} {isBn ? 'কাঠা' : 'Katha'}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="hero-plot-type"
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400"
          >
            {t.zoneLabel}
          </label>

          <select
            id="hero-plot-type"
            className="min-h-12 w-full border border-white/15 bg-slate-900 px-3 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400"
            value={plotType}
            onChange={(event) => setPlotType(event.target.value)}
          >
            <option value="" className="bg-slate-950">
              {t.allZones}
            </option>
            <option value="residential" className="bg-slate-950">
              {t.residential}
            </option>
            <option value="commercial" className="bg-slate-950">
              {t.commercial}
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 bg-emerald-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:min-w-52"
        >
          <MessageCircle className="h-4 w-4" />
          {t.button}
        </button>
      </div>

      <p className="mt-3 text-[11px] leading-5 text-slate-500">
        {isBn
          ? 'এই ফর্মটি সরাসরি প্লট বুক করে না; নির্বাচিত তথ্যসহ হোয়াটসঅ্যাপে বার্তা তৈরি করে।'
          : 'This form does not reserve a plot; it prepares a WhatsApp inquiry with your selected preferences.'}
      </p>
    </motion.form>
  );
}