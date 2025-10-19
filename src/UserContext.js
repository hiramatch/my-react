import { createContext, useState } from 'react';

// Contextを作成
export const UserContext = createContext();

// UserProviderコンポーネント: 子コンポーネントにユーザー情報を提供
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username, loginTime: new Date().toLocaleTimeString() });
  };

  const logout = () => {
    setUser(null);
  };

  // Providerで子コンポーネントにuser、login、logout関数を提供
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
