import { createContext, useContext, useState } from 'react';
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('ThemeContext was use outside of provider');
  }
  return context;
}
// export const useTheme = () => useContext(ThemeContext);
