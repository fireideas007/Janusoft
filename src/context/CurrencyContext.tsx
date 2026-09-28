import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'USD' | 'INR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (usdAmount: number) => string;
  prototypePrice: string;
  usdToInrRate: number;
  detectedCountry: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const USD_TO_INR_RATE = 86;

function detectInitialCurrency(): { currency: Currency; country: string } {
  // 1. Check local storage for explicit user preference
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('janusoft_currency');
      if (saved === 'USD' || saved === 'INR') {
        return { currency: saved, country: saved === 'INR' ? 'IN' : 'US' };
      }
    } catch (e) {
      // ignore storage access issues
    }
  }

  // 2. Instant Zero-Latency Timezone & Locale Detection
  if (typeof window !== 'undefined') {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      const tzOffset = new Date().getTimezoneOffset(); // India is UTC+5:30 -> -330 minutes
      const languages = navigator.languages || [navigator.language || ''];

      const isIndiaTz = 
        tz.includes('Kolkata') || 
        tz.includes('Calcutta') || 
        tz === 'Asia/Colombo' || 
        tzOffset === -330;

      const isIndiaLocale = languages.some((lang) => 
        lang.toLowerCase().includes('-in') || 
        lang.toLowerCase().startsWith('hi') || 
        lang.toLowerCase().startsWith('te') || 
        lang.toLowerCase().startsWith('ta') ||
        lang.toLowerCase().startsWith('gu') ||
        lang.toLowerCase().startsWith('mr')
      );

      if (isIndiaTz || isIndiaLocale) {
        return { currency: 'INR', country: 'IN' };
      }
    } catch (e) {
      // ignore
    }
  }

  // Default to USD for USA & international visitors
  return { currency: 'USD', country: 'US' };
}

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initial = detectInitialCurrency();
  const [currency, setCurrencyState] = useState<Currency>(initial.currency);
  const [detectedCountry, setDetectedCountry] = useState<string>(initial.country);

  // Background non-blocking geo-IP lookup with timeout to refine country
  useEffect(() => {
    // If user already explicitly set their preference, don't override
    try {
      const userPref = localStorage.getItem('janusoft_currency');
      if (userPref === 'USD' || userPref === 'INR') {
        return;
      }
    } catch (e) {
      // ignore
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);

    // Try free fast IP location lookup
    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Geo response not ok');
        return res.json();
      })
      .then((data) => {
        clearTimeout(timer);
        if (data && data.country_code) {
          const countryCode = data.country_code.toUpperCase();
          setDetectedCountry(countryCode);
          if (countryCode === 'IN') {
            setCurrencyState('INR');
          } else {
            setCurrencyState('USD');
          }
        }
      })
      .catch(() => {
        // Fallback or offline: timezone heuristic is already accurate!
      });

    return () => clearTimeout(timer);
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem('janusoft_currency', c);
    } catch (e) {
      // ignore
    }
  };

  const formatPrice = (usdAmount: number): string => {
    if (currency === 'INR') {
      const inrAmount = Math.round(usdAmount * USD_TO_INR_RATE);
      return `₹${inrAmount.toLocaleString('en-IN')}`;
    }
    return `$${usdAmount.toLocaleString('en-US')}`;
  };

  const prototypePrice = currency === 'USD' ? '$390' : '₹29,990';

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        prototypePrice,
        usdToInrRate: USD_TO_INR_RATE,
        detectedCountry,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
