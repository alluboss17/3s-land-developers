'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  
  // Pull navigation translations based on current language
  const t = translations[language].nav; 

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white uppercase">
              3S LAND <span className="text-amber-400">DEVELOPERS</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {/* Notice how we use {t.projects} instead of hardcoded "Projects" */}
            <Link href="/projects" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              {t.projects}
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              {t.about}
            </Link>
            <Link href="/contact" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg transition-all">
              {t.inquire}
            </Link>
            
            {/* The Translation Toggle Button */}
            <button 
              onClick={toggleLanguage}
              className="ml-4 text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase border border-slate-700 px-3 py-1.5 rounded-full transition-colors"
            >
              {language === 'en' ? '🌐 EN / BD' : '🌐 BD / EN'}
            </button>
          </nav>

          {/* ... Keep your existing mobile hamburger menu code here ... */}
          
        </div>
      </div>
    </header>
  );
}