'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem('3s-language');

      if (savedLanguage === 'en' || savedLanguage === 'bn') {
        setLanguage(savedLanguage);
      }
    } catch {
      // The site still works if browser storage is unavailable.
    } finally {
      setHasLoadedPreference(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedPreference) return;

    document.documentElement.lang = language;

    try {
      window.localStorage.setItem('3s-language', language);
    } catch {
      // Do not block language switching if storage is unavailable.
    }
  }, [language, hasLoadedPreference]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'bn' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}