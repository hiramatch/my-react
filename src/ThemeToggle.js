import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  // useContextでThemeContextから値を取得
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>現在のテーマ: {theme}</p>
      <button onClick={toggleTheme}>
        テーマ切り替え
      </button>
    </div>
  );
}
