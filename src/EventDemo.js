import { useState } from 'react';

export default function EventDemo() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  // フォーム送信処理
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(inputValue);
  };

  // キーボードイベント処理
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    } else if (event.key === 'Escape') {
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>イベントハンドリング デモ</h2>

      {/* フォーム送信版 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="メッセージを入力（ボタンで送信）"
        />
        <button type="submit">送信</button>
      </form>

      {/* キーボードイベント版 */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enterで送信、Escでクリア"
      />
    

      {message && (
        <div>
          <p>送信されたメッセージ: {message}</p>
        </div>
      )}
    </div>
  );
}
