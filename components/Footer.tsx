'use client';

import Link from 'next/link';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const phoneNumbers = [
  {
    display: '+880 1835-105772',
    raw: '+8801835105772',
    whatsapp: true,
  },
  {
    display: '+880 1923-418234',
    raw: '+8801923418234',
    whatsapp: false,
  },
  {
    display: '+880 1832-111333',
    raw: '+8801832111333',
    whatsapp: true,
  },
];

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;
  const isBn = language === 'bn';

  const address = isBn
    ? 'আটিবাজার, কেরানীগঞ্জ মডেল, ঢাকা-১৩১২, বাংলাদেশ।'
    : 'Ati Bazar, Keraniganj Model, Dhaka-1312, Bangladesh.';

  const companyDescription = isBn
    ? '২০ বছরেরও বেশি সময় ধরে আবাসন, জমি উন্নয়ন, জমি ভরাট ও জমি ট্রেডিং খাতে কাজ করছে ৩এস ল্যান্ড ডেভেলপারস।'
    : '3S Land Developers has over 20 years of experience in housing, land development, land filling, and land trading.';

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 pb-7 pt-14 text-slate-400 sm:px-6 sm:pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-3 md:gap-12 md:pb-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-white">
            <span className="flex h-9 w-9 items-center justify-center border border-emerald-400/40 bg-emerald-400/10 text-sm font-black text-emerald-300">
              3S
            </span>

            <span className="text-lg font-extrabold uppercase tracking-tight">
              3S LAND <span className="text-amber-400">DEVELOPERS</span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm font-light leading-7 text-slate-400">
            {companyDescription}
          </p>

          <p className="mt-4 text-xs leading-6 text-slate-500">
            {isBn ? 'চলমান প্রকল্প:' : 'Featured development:'}{' '}
            <span className="text-slate-300">
              {isBn
                ? 'অবকাশ লেক ভিউ সোসাইটি'
                : 'Abakash Lake View Society'}
            </span>
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            {t.explore}
          </h2>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/projects" className="transition-colors hover:text-emerald-300">
                {navT.projects}
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-emerald-300">
                {navT.about}
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="transition-colors hover:text-emerald-300">
                {navT.gallery}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-emerald-300">
                {navT.inquire}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            {t.contact}
          </h2>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ati+Bazar%2C+Keraniganj+Model%2C+Dhaka+1312%2C+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-6 transition-colors hover:text-white"
              >
                {address}
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <div className="space-y-2">
                {phoneNumbers.map((phone) => (
                  <div
                    key={phone.raw}
                    className="flex flex-wrap items-center gap-x-2 gap-y-1"
                  >
                    <a
                      href={`tel:${phone.raw}`}
                      className="transition-colors hover:text-white"
                    >
                      {phone.display}
                    </a>

                    {phone.whatsapp && (
                      <a
                        href={`https://wa.me/${phone.raw.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${phone.display} WhatsApp`}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-emerald-300 transition-colors hover:bg-white/10"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
              <a
                href="mailto:sawkat70@gmail.com"
                className="break-all transition-colors hover:text-white"
              >
                sawkat70@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
        <p className="text-xs leading-6 text-slate-500">
          © {new Date().getFullYear()} {t.copyright}
        </p>

        <p className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
          {t.digitalPartner}
          <span className="text-slate-700">|</span>

          <a
            href="https://andigitalstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white transition-colors hover:text-emerald-300"
          >
            AN Digital Studio <ArrowUpRight className="h-3 w-3" />
          </a>
        </p>
      </div>
    </footer>
  );
}