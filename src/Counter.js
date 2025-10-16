import { useState } from 'react';

export default function Counter() {
  // TODO(human): useStateを使って、countという状態変数を作成してください
  // ヒント: const [count, setCount] = useState(0); という形式です
  // 0は初期値で、countが現在の値、setCountが値を更新する関数です
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: { count }</p>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        +1
      </button>
      <button onClick={() => {
        setCount(count -1);
      }}>
        -1
      </button>
      <button onClick={() => {
        setCount(0);
      }}>
        Reset
      </button>


    </div>
  );
}
