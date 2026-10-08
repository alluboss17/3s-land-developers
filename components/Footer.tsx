'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();

  const t = translations[language].footer;
  const navT = translations[language].nav;

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl text-white mb-4">
            3S LAND{' '}
            <span className="text-emerald-500 text-xs font-sans font-bold uppercase tracking-widest">
              Developers
            </span>
          </h3>

          <p className="text-sm font-light leading-relaxed mb-6 max-w-sm">
            {t.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
            {t.explore}
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-emerald-400 transition-colors"
              >
                {navT.about}
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="hover:text-emerald-400 transition-colors"
              >
                {navT.projects}
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="hover:text-emerald-400 transition-colors"
              >
                {navT.gallery}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-emerald-400 transition-colors"
              >
                {navT.inquire}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">
            {t.contact}
          </h4>

          <ul className="space-y-4 text-sm">

            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>{t.address}</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>+880 1835105772</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>info@3slanddevelopers.com</span>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-xs tracking-wide">
          © {new Date().getFullYear()} {t.copyright}
        </p>

        <p className="text-[10px] tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
          {t.digitalPartner}

          <span className="text-slate-600">|</span>

          <a
            href="https://andigitalstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1"
          >
            AN Digital Studio
            <ArrowRight className="w-3 h-3" />
          </a>
        </p>

      </div>
    </footer>
  );
}