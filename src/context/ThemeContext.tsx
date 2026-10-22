import React, { createContext, useContext, useState, useEffect } from 'react';

export type AccentTheme = 'emerald' | 'amber' | 'rose' | 'teal';

interface ThemeContextType {
  theme: AccentTheme;
  setTheme: (theme: AccentTheme) => void;
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AccentTheme>('emerald');
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    // Apply data-theme to html
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
