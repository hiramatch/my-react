import { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import { ThemeContext } from './ThemeContext';

export default function UserProfile() {
  const [inputName, setInputName] = useState('');

  // 2つのContextから値を取得
  const { user, login, logout } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    if (inputName.trim()) {
      login(inputName);
      setInputName('');
    }
  };

  // テーマに応じたスタイルを定義
  const styles = {
    light: {
      backgroundColor: '#f0f0f0',
      color: '#000000',
      padding: '20px',
      margin: '10px',
      border: '2px solid #ccc'
    },
    dark: {
      backgroundColor: '#444444',
      color: '#ffffff',
      padding: '20px',
      margin: '10px',
      border: '2px solid #888'
    }
  };

  // themeに応じて適切なスタイルを選択
  const currentStyle = styles[theme];

  return (
    <div style={currentStyle}>
      <h3>ユーザープロフィール</h3>

      {user ? (
        <div>
          <p>ユーザー名: {user.name}</p>
          <p>ログイン時刻: {user.loginTime}</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="名前を入力"
          />
          <button onClick={handleLogin}>ログイン</button>
        </div>
      )}
    </div>
  );
}
