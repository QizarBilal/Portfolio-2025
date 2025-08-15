import React, { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { applyTheme, getThemeFromStorage, themes } from '../utils/theme';
import type { Theme } from '../utils/theme';

export interface ThemeContextType {
  currentTheme: string;
  setTheme: (themeName: string) => void;
  themes: Theme[];
  isLoading: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>('midnight-black');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get theme from localStorage on mount
    const savedTheme = getThemeFromStorage();
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
    setIsLoading(false);
  }, []);

  const setTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
  };

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    themes,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
