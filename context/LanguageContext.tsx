'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
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
  const initializedRef = useRef(false);

  // Load saved language after hydration
  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('3s-language');

    if (savedLanguage === 'bn' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }

    document.documentElement.lang =
      savedLanguage === 'bn' ? 'bn' : 'en';

    initializedRef.current = true;
  }, []);

  // Save language and update document language
  useEffect(() => {
    if (!initializedRef.current) return;

    window.localStorage.setItem('3s-language', language);

    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
}