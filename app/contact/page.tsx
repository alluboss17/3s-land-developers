'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contactPage;

  const whatsappUrl =
    'https://wa.me/8801835105772?text=' +
    encodeURIComponent(t.whatsappMessage);

  return (
    <main className="min-h-screen bg-white selection:bg-emerald-900 selection:text-white pt-20">

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-24">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-800 text-[10px] font-semibold uppercase tracking-[0.3em] block mb-6"
          >
            {t.badge}
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif text-slate-950 tracking-tight mb-8"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="text-lg text-slate-500 font-light max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">

          {/* Contact Information */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1 }}
            className="bg-slate-50 p-12 md:p-20 flex flex-col justify-center"
          >

            <div className="space-y-16">

              {/* Phone */}
              <div className="flex items-start group">

                <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mr-8 shrink-0 group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-white transition-all duration-500">
                  <Phone
                    className="w-4 h-4"
                    strokeWidth={1.5}
                  />
                </div>

                <div>

                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                    {t.directLine}
                  </p>

                  <a
                    href="tel:+8801835105772"
                    className="text-2xl font-serif text-slate-900 hover:text-emerald-800 transition-colors block mb-2"
                  >
                    +880 1835-105772
                  </a>

                  <a
                    href="tel:+8801923418234"
                    className="text-2xl font-serif text-slate-900 hover:text-emerald-800 transition-colors"
                  >
                    +880 1923-418234
                  </a>

                </div>
              </div>

              {/* Location */}
              <div className="flex items-start group">

                <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mr-8 shrink-0 group-hover:bg-slate-950 group-hover:border-slate-950 group-hover:text-white transition-all duration-500">
                  <MapPin
                    className="w-4 h-4"
                    strokeWidth={1.5}
                  />
                </div>

                <div>

                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                    {t.projectLocation}
                  </p>

                  <p className="text-lg font-light text-slate-900 leading-relaxed">
                    {t.locationLine1}
                    <br />
                    {t.locationLine2}
                  </p>

                </div>
              </div>

            </div>

            {/* WhatsApp Button */}
            <div className="mt-20 pt-10 border-t border-slate-200">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-full py-5 bg-slate-950 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 gap-3"
              >
                <MessageCircle className="w-4 h-4" />
                {t.whatsappBtn}
              </a>

            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1 }}
            className="w-full h-[500px] lg:h-auto min-h-[500px] bg-white relative grayscale hover:grayscale-0 transition-all duration-1000"
          >

            <iframe
              title="3S Land Developers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14611.834190897595!2d90.3235!3d23.7122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ef6b4d320d%3A0xa1d556a3e5c9b7e1!2sAtibazar%2C%20Keraniganj!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />

          </motion.div>

        </div>
      </div>
    </main>
  );
}