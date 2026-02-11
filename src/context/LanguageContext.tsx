import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'NO' | 'EN';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export type { Language };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('NO');

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];

    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        return path;
      }
      current = current[key];
    }

    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Optional version of useLanguage that returns fallback values if LanguageProvider is not available.
 * Use this when you want to use language features but don't want to require LanguageProvider.
 */
export const useLanguageOptional = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    // Return fallback implementation
    return {
      language: 'NO' as Language,
      setLanguage: () => {
        console.warn('LanguageProvider is not available. Language changes will not work.');
      },
      t: (key: string) => {
        // Return a readable fallback based on the key
        const fallbacks: Record<string, string> = {
          // Header translations
          'header.darkMode': 'Nattmodus',
          'header.language': 'Språk',
          'header.selectLanguage': 'Velg språk',
          'header.homeAriaLabel': 'Norges Røde Kors Hjem',
          'header.login': 'Logg inn',
          'header.search': 'Søk',
          'header.close': 'Lukk',
          'header.closeSearch': 'Lukk søk',
          'header.openSearch': 'Åpne søk',
          'header.menu': 'Meny',
          'header.closeMenu': 'Lukk meny',
          'header.openMenu': 'Åpne meny',
          'header.supportUs': 'Støtt oss',
          'header.toggleTheme': 'Bytt tema',
          'header.searchPlaceholder': 'Søk...',
          'header.clearSearch': 'Tøm søk',
          'header.suggestions': 'Forslag',
          'header.viewAll': 'Se alle',
          'header.noResults': 'Ingen resultater for',
          // Footer translations
          'footer.shortcuts': 'Snarveier',
          'footer.shortcutsLinks.services': 'Tilbudene',
          'footer.shortcutsLinks.volunteer': 'Bli frivillig',
          'footer.shortcutsLinks.ourWork': 'Vårt arbeid',
          'footer.shortcutsLinks.about': 'Om Røde Kors',
          'footer.shortcutsLinks.support': 'Støtt arbeidet',
          'footer.shortcutsLinks.contact': 'Kontakt oss',
          'footer.contact.visitingAddress': 'Besøks adresse',
          'footer.contact.organizationNumber': 'Organisasjonsnummer',
          'footer.contact.email': 'E-post',
          'footer.contact.phone': 'Telefon',
          'footer.contact.title': 'Kontakt',
          'footer.followUs': 'Følg oss',
          'footer.links': 'Lenker',
          'footer.copyright': 'Rødekors',
          'footer.legal.privacy': 'Personvern',
          'footer.legal.press': 'For presse',
          'footer.legal.procurement': 'Regler for innkjøp',
          'footer.legal.whistleblowing': 'Varsling/Misconduct',
          // Carousel translations
          'carousel.loading': 'Laster bilde',
          'carousel.previousImage': 'Forrige bilde',
          'carousel.nextImage': 'Neste bilde',
          'carousel.imagePosition': 'Bildeposisjon',
          'carousel.goToImage': 'Gå til bilde',
          // DatePicker translations
          'datePicker.previousMonth': 'Forrige måned',
          'datePicker.nextMonth': 'Neste måned',
          // DateInput translations
          'dateInput.openDatePicker': 'Åpne datovelger',
        };
        return fallbacks[key] || key;
      },
    };
  }
  
  return context;
};





