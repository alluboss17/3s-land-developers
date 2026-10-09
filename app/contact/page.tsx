'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const phoneNumbers = [
  { label: '+880 1835-105772', tel: '+8801835105772', whatsapp: true },
  { label: '+880 1923-418234', tel: '+8801923418234', whatsapp: false },
  { label: '+880 1832-111333', tel: '+8801832111333', whatsapp: true },
];

const officeAddress =
  'Ati Bazar, Keraniganj Model, Dhaka-1312, Bangladesh';

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(officeAddress);

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contactPage;
  const isBn = language === 'bn';
  const reduceMotion = useReducedMotion() ?? false;

  const whatsappMessage = isBn
    ? 'হ্যালো ৩এস ল্যান্ড ডেভেলপারস, আমি অবকাশ লেক ভিউ সোসাইটি সম্পর্কে বিস্তারিত জানতে আগ্রহী।'
    : 'Hello 3S Land Developers, I would like to learn more about Abakash Lake View Society.';

  const whatsappUrl = (phone: string) =>
    `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-900 selection:text-white">
      {/* Contact hero */}
      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300 sm:text-xs sm:tracking-[0.3em]">
            <span className="h-px w-8 bg-emerald-400" />
            {t.badge}
          </span>

          <h1 className="max-w-4xl text-4xl font-serif leading-[1.1] tracking-tight sm:text-5xl md:text-7xl">
            {t.title}
          </h1>

          <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-slate-300 sm:text-base sm:leading-8">
            {t.description}
          </p>
        </motion.div>
      </section>

      <section className="px-5 py-10 sm:px-6 sm:py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="border border-slate-200 bg-slate-50 p-5 sm:p-8 md:p-10"
          >
            <h2 className="text-2xl font-serif text-slate-950 sm:text-3xl">
              {isBn ? 'সরাসরি যোগাযোগ' : 'Get in touch directly'}
            </h2>

            <p className="mt-3 text-sm font-light leading-7 text-slate-600">
              {isBn
                ? 'প্লটের প্রাপ্যতা, মূল্য, নকশা বা সাইট পরিদর্শন নিয়ে বিক্রয় দলের সাথে কথা বলুন।'
                : 'Speak with the sales team about plot availability, pricing, the project layout, or arranging a site visit.'}
            </p>

            <div className="mt-8 space-y-7 border-t border-slate-200 pt-7">
              {/* Phone numbers */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-emerald-900/15 bg-white text-emerald-900">
                  <Phone className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {t.directLine}
                  </h3>

                  <div className="mt-3 space-y-3">
                    {phoneNumbers.map((phone) => (
                      <div
                        key={phone.tel}
                        className="flex flex-wrap items-center gap-x-3 gap-y-2"
                      >
                        <a
                          href={`tel:${phone.tel}`}
                          className="text-base font-medium text-slate-950 transition-colors hover:text-emerald-800 sm:text-lg"
                        >
                          {phone.label}
                        </a>

                        {phone.whatsapp && (
                          <a
                            href={whatsappUrl(phone.tel)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-9 items-center gap-1.5 border border-emerald-800/20 px-2.5 text-[10px] font-bold uppercase tracking-wide text-emerald-900 transition-colors hover:bg-emerald-50"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                            WhatsApp
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-emerald-900/15 bg-white text-emerald-900">
                  <MapPin className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {t.projectLocation}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-900">
                    {t.locationLine1}
                    <br />
                    {t.locationLine2}
                  </p>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex min-h-9 items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-emerald-900 transition-colors hover:text-emerald-700"
                  >
                    {isBn ? 'দিকনির্দেশনা দেখুন' : 'Get directions'}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-emerald-900/15 bg-white text-emerald-900">
                  <Mail className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    {isBn ? 'ইমেইল' : 'Email'}
                  </h3>

                  <a
                    href="mailto:sawkat70@gmail.com"
                    className="mt-3 inline-block break-all text-base text-slate-950 transition-colors hover:text-emerald-800"
                  >
                    sawkat70@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="flex min-h-[360px] flex-col overflow-hidden border border-slate-200 bg-slate-100 sm:min-h-[480px] lg:min-h-0"
          >
            <div className="flex items-center justify-between gap-4 bg-white px-5 py-4 sm:px-6">
              <div>
                <h2 className="text-sm font-semibold text-slate-950">
                  {isBn ? 'আমাদের অফিস' : 'Our office'}
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  {t.locationLine1}, {t.locationLine2}
                </p>
              </div>

              <MapPin className="h-5 w-5 shrink-0 text-emerald-800" />
            </div>

            <div className="relative min-h-[320px] flex-1 sm:min-h-[420px]">
              <iframe
                title={
                  isBn
                    ? '৩এস ল্যান্ড ডেভেলপারস অফিসের মানচিত্র'
                    : 'Map to 3S Land Developers office'
                }
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.834190897595!2d90.3235!3d23.7122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ef6b4d320d%3A0xa1d556a3e5c9b7e1!2sAtibazar%2C%20Keraniganj!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 bg-slate-950 px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-emerald-900"
            >
              {isBn ? 'গুগল ম্যাপে খুলুন' : 'Open in Google Maps'}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}