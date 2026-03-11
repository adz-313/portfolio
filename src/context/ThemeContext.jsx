import React, { createContext, useState, useEffect, useContext } from 'react';
import { themes } from '../data/themeData';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use dark as default
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme !== 'light';
    setIsDarkMode(isDark);
    applyTheme(isDark ? 'dark' : 'light');
  }, []);

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(key, theme[key]);
    });
    
    // Kept in case some existing code expects the data-attribute (though styling relies on injected CSS vars now)
    if (themeName === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    const themeName = newIsDark ? 'dark' : 'light';
    localStorage.setItem('theme', themeName);
    applyTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
