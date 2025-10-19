import { useState, useEffect } from 'react';

export default function EffectDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // countが変更されたときにログを出力
  useEffect(() => {
    console.log('countが変更されました:', count);
  }, [count]);

  // マウント時にメッセージを設定
  useEffect(() => {
    setMessage('コンポーネントがマウントされました');
  }, []);

  // タイマーを設定（クリーンアップあり）
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('1秒経過');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>useEffect デモ</h2>

      <div>
        <p>カウント: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>

      <div>
        <p>{message}</p>
      </div>

      <div>
        <p>ブラウザのコンソールを開いて、ログを確認してください</p>
      </div>
    </div>
  );
}
