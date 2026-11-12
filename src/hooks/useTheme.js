import { useState, useEffect } from 'react';

/**
 * Hook to manage Dark and Light theme with localStorage persistence
 * and system preference detection.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('app-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // default to futuristic dark mode as requested
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#030712';
      document.body.style.color = '#f1f5f9';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, setTheme, toggleTheme, isDark: theme === 'dark' };
}
