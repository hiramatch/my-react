import { createContext, useState } from 'react';

// Contextを作成
export const ThemeContext = createContext();

// ThemeProviderコンポーネント: 子コンポーネントにテーマ情報を提供
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Providerで子コンポーネントにthemeとtoggleThemeを提供
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
