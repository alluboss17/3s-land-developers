'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Images, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type GalleryCategory =
  | 'all'
  | 'landFilling'
  | 'infrastructure'
  | 'layouts'
  | 'clientVisits';

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language].galleryPage;
  const isBn = language === 'bn';
  const reduceMotion = useReducedMotion() ?? false;

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>('all');

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: t.categories.all },
    { id: 'landFilling', label: t.categories.landFilling },
    { id: 'infrastructure', label: t.categories.infrastructure },
    { id: 'layouts', label: t.categories.layouts },
    { id: 'clientVisits', label: t.categories.clientVisits },
  ];

  const galleryItems = useMemo(
    () => [
      // =========================
      // EXISTING IMAGES
      // =========================
      {
        id: 1,
        title: t.items.filling,
        category: 'landFilling' as const,
        image: '/images/site-1.jpg',
      },
      {
        id: 2,
        title: t.items.boundary,
        category: 'infrastructure' as const,
        image: '/images/board.jpg',
      },
      {
        id: 3,
        title: t.items.equipment,
        category: 'landFilling' as const,
        image: '/images/action.jpg',
      },
      {
        id: 4,
        title: t.items.road,
        category: 'infrastructure' as const,
        image: '/images/site-3.jpg',
      },
      {
        id: 5,
        title: t.items.aerial,
        category: 'layouts' as const,
        image: '/images/site-4.jpg',
      },
      {
        id: 6,
        title: t.items.clearing,
        category: 'layouts' as const,
        image: '/images/wide.jpg',
      },
      {
        id: 7,
        title: isBn
          ? 'প্রস্তুত জমির বিস্তৃত দৃশ্য'
          : 'Wide view of prepared land',
        category: 'landFilling' as const,
        image: '/images/site-2.jpg',
      },

      // =========================
      // NEW BANNER / SITE IMAGES
      // =========================
      {
        id: 8,
        title: isBn
          ? 'প্রকল্প এলাকার বিস্তৃত দৃশ্য'
          : 'Project area overview',
        category: 'layouts' as const,
        image: '/images/banner-1.jpg',
      },
      {
        id: 9,
        title: isBn
          ? 'আবাসন প্রকল্পের সামগ্রিক দৃশ্য'
          : 'Development overview',
        category: 'layouts' as const,
        image: '/images/banner-2.jpg',
      },
      {
        id: 10,
        title: isBn
          ? 'প্রকল্পের বর্তমান অগ্রগতির দৃশ্য'
          : 'Current project progress',
        category: 'layouts' as const,
        image: '/images/banner-3.jpg',
      },

      // =========================
      // CLIENT / SITE VISIT IMAGES
      // =========================
      {
        id: 11,
        title: isBn
          ? 'প্রকল্প এলাকায় ক্লায়েন্ট পরিদর্শন'
          : 'Client visit at the project site',
        category: 'clientVisits' as const,
        image: '/images/client-1.jpg',
      },
      {
        id: 12,
        title: isBn
          ? 'ক্লায়েন্টদের প্রকল্প পরিদর্শন'
          : 'Clients visiting the development',
        category: 'clientVisits' as const,
        image: '/images/client-2.jpg',
      },
      {
        id: 13,
        title: isBn
          ? 'প্রকল্প এলাকায় ক্লায়েন্ট ভিজিট'
          : 'Client site visit',
        category: 'clientVisits' as const,
        image: '/images/client-3.jpg',
      },

      // =========================
      // LAND / FIELD IMAGES
      // =========================
      {
        id: 14,
        title: isBn
          ? 'ভরাটকৃত জমির বর্তমান অবস্থা'
          : 'Current condition of prepared land',
        category: 'landFilling' as const,
        image: '/images/field-2.JPG',
      },
      {
        id: 15,
        title: isBn
          ? 'প্রকল্পের প্রস্তুত জমি'
          : 'Prepared project land',
        category: 'landFilling' as const,
        image: '/images/field.jpg',
      },
      {
        id: 16,
        title: isBn
          ? 'জমি ভরাট কার্যক্রমের অগ্রগতি'
          : 'Land filling progress',
        category: 'landFilling' as const,
        image: '/images/filled.jpg',
      },

      // =========================
      // ROAD / INFRASTRUCTURE IMAGES
      // =========================
      {
        id: 17,
        title: isBn
          ? 'প্রকল্পের অভ্যন্তরীণ সড়ক'
          : 'Internal project road',
        category: 'infrastructure' as const,
        image: '/images/road-1.jpg',
      },
      {
        id: 18,
        title: isBn
          ? 'প্রকল্পের সড়ক উন্নয়ন'
          : 'Road development progress',
        category: 'infrastructure' as const,
        image: '/images/road-2.JPG',
      },
      {
        id: 19,
        title: isBn
          ? 'প্রকল্প এলাকায় উন্নত সড়ক ব্যবস্থা'
          : 'Road infrastructure at the project',
        category: 'infrastructure' as const,
        image: '/images/road-3.jpg',
      },
    ],
    [language, t, isBn]
  );

  const filteredItems = useMemo(
    () =>
      activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(
            (item) => item.category === activeCategory
          ),
    [activeCategory, galleryItems]
  );

  const selectedItem =
    galleryItems.find((item) => item.id === selectedId) ?? null;

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const changeCategory = (category: GalleryCategory) => {
    setActiveCategory(category);
    setSelectedId(null);
  };

  const moveLightbox = useCallback(
    (direction: -1 | 1) => {
      if (selectedIndex < 0 || filteredItems.length === 0) return;

      const nextIndex =
        (selectedIndex + direction + filteredItems.length) %
        filteredItems.length;

      setSelectedId(filteredItems[nextIndex].id);
    },
    [filteredItems, selectedIndex]
  );

  useEffect(() => {
    if (selectedId === null) return;

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedId(null);
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    };

    window.addEventListener('keydown', handleKeys);

    return () => {
      window.removeEventListener('keydown', handleKeys);
    };
  }, [selectedId, moveLightbox]);

  return (
    <main className="min-h-screen bg-slate-950 pb-20 text-white selection:bg-emerald-900 selection:text-white sm:pb-28">
      {/* =========================
          HERO
      ========================== */}
      <section className="border-b border-white/10 px-5 py-16 sm:px-6 sm:py-20 md:py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
          }}
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

      {/* =========================
          GALLERY
      ========================== */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-6 sm:pt-12">
        {/* Category filters */}
        <div
          className="mb-8 flex flex-wrap gap-2 sm:mb-10 sm:gap-3"
          role="group"
          aria-label={
            isBn
              ? 'ছবির বিভাগ বাছাই করুন'
              : 'Filter project photos'
          }
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => changeCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`inline-flex min-h-10 items-center border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors sm:text-xs sm:tracking-[0.1em] ${
                activeCategory === category.id
                  ? 'border-emerald-700 bg-emerald-800 text-white'
                  : 'border-white/15 bg-white/[0.03] text-slate-300 hover:border-white/35 hover:bg-white/[0.07]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: reduceMotion ? 1 : 0.98,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.025,
                }}
                onClick={() => setSelectedId(item.id)}
                aria-label={`${
                  isBn ? 'বড় করে দেখুন:' : 'View larger:'
                } ${item.title}`}
                className="group relative block aspect-[4/3] overflow-hidden border border-white/10 bg-slate-900 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-300 sm:text-[10px] sm:tracking-[0.2em]">
                    {
                      categories.find(
                        (category) =>
                          category.id === item.category
                      )?.label
                    }
                  </span>

                  <span className="block text-lg font-serif leading-snug text-white sm:text-xl">
                    {item.title}
                  </span>

                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                    <Images className="h-3.5 w-3.5" />

                    {isBn
                      ? 'বড় করে দেখুন'
                      : 'View photo'}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =========================
          LIGHTBOX
      ========================== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedId(null);
              }
            }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedItem.title}
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.98,
              }}
              className="relative flex max-h-[92svh] w-full max-w-6xl flex-col overflow-hidden border border-white/10 bg-slate-950"
            >
              {/* Lightbox header */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">
                    {selectedItem.title}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500">
                    {selectedIndex + 1} / {filteredItems.length}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  aria-label={
                    isBn ? 'বন্ধ করুন' : 'Close image'
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image */}
              <div className="relative min-h-0 flex-1 bg-black">
                <div className="relative h-[55svh] w-full sm:h-[68svh]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                {/* Previous / Next */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => moveLightbox(-1)}
                      aria-label={
                        isBn ? 'আগের ছবি' : 'Previous photo'
                      }
                      className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-slate-950/65 text-white backdrop-blur-sm transition-colors hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:left-5"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => moveLightbox(1)}
                      aria-label={
                        isBn ? 'পরের ছবি' : 'Next photo'
                      }
                      className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-slate-950/65 text-white backdrop-blur-sm transition-colors hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 sm:right-5"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <p className="px-4 py-3 text-xs leading-5 text-slate-400 sm:px-5">
                {t.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}