import { useState, useMemo, useCallback } from 'react';

// 重い計算をシミュレート
function expensiveCalculation(num) {
  console.log('重い計算を実行中...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
}

export default function MemoDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useMemoで重い計算結果をメモ化
  // countが変わった時だけ再計算され、textが変わっても再計算されない
  const doubledCount = useMemo(() => expensiveCalculation(count), [count]);

  // useCallbackで関数をメモ化
  // countが変わった時だけ新しい関数が作られる
  const increment = useCallback(() => { setCount(count + 1); }, [count]);

  return (
    <div>
      <h2>useMemo & useCallback デモ</h2>

      <div>
        <h3>1. useMemo（値のメモ化）</h3>
        <p>カウント: {count}</p>
        <p>2倍の値: { doubledCount }</p>
        <button onClick={() => setCount(count + 1)}>カウント+1</button>
        <p style={{fontSize: '12px', color: '#666'}}>
          ※ カウントボタンをクリックすると計算が実行されます（コンソール確認）
        </p>
      </div>

      <div>
        <h3>2. テキスト入力（計算に影響しない）</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ここに入力"
        />
        <p>入力値: {text}</p>
        <p style={{fontSize: '12px', color: '#666'}}>
          ※ テキストを入力しても重い計算は実行されません（useMemoのおかげ）
        </p>
      </div>

      <div>
        <h3>3. useCallback（関数のメモ化）</h3>
        <button onClick={increment}>増やす</button>
        <p style={{fontSize: '12px', color: '#666'}}>
          ※ useCallbackで関数をメモ化すると、子コンポーネントへの不要な再レンダリングを防げます
        </p>
      </div>

      <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0'}}>
        <h4>useMemoとuseCallbackの違い：</h4>
        <ul>
          <li>useMemo: 計算結果（値）をメモ化</li>
          <li>useCallback: 関数そのものをメモ化</li>
          <li>両方とも依存配列が変わらない限り、前回の結果を再利用</li>
        </ul>
      </div>
    </div>
  );
}
