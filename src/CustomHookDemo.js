import { useLocalStorage } from './useLocalStorage';

export default function CustomHookDemo() {
  const [name, setName] = useLocalStorage('userName', '');
  const [count, setCount] = useLocalStorage('counter', 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>カスタムフック デモ</h2>

      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h3>1. 名前の保存</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前を入力"
        />
        <p>保存されている名前: {name}</p>
      </div>

      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h3>2. カウンターの保存</h3>
        <p>カウント: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>

      <div style={{ padding: '10px', backgroundColor: '#ffe0e0' }}>
        <p><strong>💡 試してみよう：</strong></p>
        <ul>
          <li>値を変更してページをリロード → 値が保持されている！</li>
          <li>ブラウザの開発者ツール → Application → Local Storage で確認できます</li>
        </ul>
      </div>
    </div>
  );
}
