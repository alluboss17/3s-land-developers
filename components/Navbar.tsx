'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language].nav;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase">
              3S LAND <span className="text-amber-400">DEVELOPERS</span>
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/projects"
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {t.projects}
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {t.about}
              </Link>

              <Link
                href="/gallery"
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {t.gallery}
              </Link>

              <Link
                href="/contact"
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg transition-all"
              >
                {t.inquire}
              </Link>
            </nav>

            {/* ONE Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              aria-label={
                language === 'en'
                  ? 'Switch to Bengali'
                  : 'Switch to English'
              }
              className="text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase border border-slate-700 px-3 py-2 rounded-full transition-colors whitespace-nowrap"
            >
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">

          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800"
          >
            {t.projects}
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800"
          >
            {t.about}
          </Link>

          <Link
            href="/gallery"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-800"
          >
            {t.gallery}
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md"
          >
            {t.inquire}
          </Link>
        </div>
      )}
    </header>
  );
}