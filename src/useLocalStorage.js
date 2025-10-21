import { useState, useEffect } from 'react';

// useLocalStorageカスタムフック
// localStorageへの保存・読み込みを自動化
// 引数: key（localStorageのキー）、initialValue（初期値）
// 戻り値: [storedValue, setValue]（useStateと同じ形式）
export function useLocalStorage(key, initialValue) {
  // lazy initializationでlocalStorageから初期値を読み込む
  const [storedValue, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // 値が変更されたらlocalStorageに保存
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setValue];
}
