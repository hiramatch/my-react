import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemedComponent() {
  // useContextでThemeContextから値を取得
  const { theme } = useContext(ThemeContext);

  // テーマに応じたスタイルを定義
  const styles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '20px',
      margin: '10px',
      border: '2px solid #000000'
    },
    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '20px',
      margin: '10px',
      border: '2px solid #ffffff'
    }
  };

  // themeに応じて適切なスタイルを選択
  const currentStyle = styles[theme];

  return (
    <div style={currentStyle}>
      <h3>テーマが適用されたコンポーネント</h3>
      <p>このコンポーネントは、Contextから取得したテーマに応じてスタイルが変わります。</p>
      <p>テーマ切り替えボタンをクリックして、色が変わることを確認してください！</p>
    </div>
  );
}
