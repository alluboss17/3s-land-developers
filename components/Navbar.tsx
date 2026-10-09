'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

const navigation = [
  { href: '/projects', key: 'projects' as const },
  { href: '/about', key: 'about' as const },
  { href: '/gallery', key: 'gallery' as const },
  { href: '/contact', key: 'inquire' as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion() ?? false;
  const t = translations[language].nav;

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const linkClass = (href: string) => {
    const isActive = pathname === href;

    return `relative inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-sm shadow-slate-950/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="3S Land Developers home"
          className="group flex min-w-0 items-center gap-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-emerald-400/40 bg-emerald-400/10 text-sm font-black tracking-tight text-emerald-300 transition-colors group-hover:bg-emerald-400/20">
            3S
          </span>

          <span className="min-w-0 text-[13px] font-extrabold uppercase leading-tight tracking-tight sm:text-base">
            3S LAND <span className="text-amber-400">DEVELOPERS</span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={linkClass(item.href)}
              >
                {t[item.key]}

                {pathname === item.href && (
                  <span className="absolute inset-x-0 -bottom-[1.05rem] h-0.5 bg-emerald-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* One language switcher for desktop and mobile */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === 'en'
                ? 'Switch to Bengali'
                : 'Switch to English'
            }
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-700 px-3 text-xs font-bold tracking-wide text-slate-200 transition-colors hover:border-emerald-400/60 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:px-4"
          >
            {language === 'en' ? 'বাংলা' : 'EN'}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 lg:hidden"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={
              reduceMotion ? false : { opacity: 0, height: 0 }
            }
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.22,
              ease: 'easeOut',
            }}
            className="overflow-hidden border-t border-white/10 bg-slate-950 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">
              {navigation.map((item, index) => {
                const active = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={
                      reduceMotion ? false : { opacity: 0, x: -8 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.18,
                      delay: reduceMotion ? 0 : index * 0.035,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-12 items-center justify-between border-b border-white/[0.07] px-2 text-sm transition-colors hover:text-emerald-300 ${
                        active ? 'text-emerald-300' : 'text-slate-200'
                      }`}
                    >
                      {t[item.key]}
                      <ArrowUpRight className="h-4 w-4 text-slate-500" />
                    </Link>
                  </motion.div>
                );
              })}

              <p className="px-2 pt-4 text-[10px] uppercase tracking-[0.16em] text-slate-500">
                {language === 'bn'
                  ? 'অবকাশ লেক ভিউ সোসাইটি'
                  : 'Abakash Lake View Society'}
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}