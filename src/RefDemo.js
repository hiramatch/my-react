import { useState, useRef } from 'react';

export default function RefDemo() {
  const [count, setCount] = useState(0);

  // DOM要素への参照
  const inputRef = useRef(null);

  // レンダリング回数を記録（再レンダリングを引き起こさない）
  const renderCount = useRef(0);
  renderCount.current++;

  // input要素にフォーカスを設定
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef デモ</h2>

      <div>
        <h3>1. DOM要素への参照</h3>
        <input type="text" ref={inputRef} placeholder="ここに入力" />
        <button onClick={focusInput}>フォーカス</button>
      </div>

      <div>
        <h3>2. 再レンダリングを引き起こさない値</h3>
        <p>カウント: {count}</p>
        <p>レンダリング回数: {renderCount.current}</p>
        <button onClick={() => setCount(count + 1)}>カウント+1</button>
      </div>

      <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0'}}>
        <h4>useRefとuseStateの違い：</h4>
        <ul>
          <li>useStateの変更 → 再レンダリングされる</li>
          <li>useRefの変更 → 再レンダリングされない</li>
          <li>useRefは.currentプロパティで値にアクセス</li>
        </ul>
      </div>
    </div>
  );
}
