import { useState } from 'react';

export default function EventPropagation() {
  const [log, setLog] = useState([]);

  const addLog = (message) => {
    setLog(prev => [...prev, message]);
  };

  const handleOuterClick = () => {
    addLog('外側がクリックされました');
  };

  const handleInnerClick = () => {
    addLog('内側がクリックされました');
  };

  const handleButtonClick = (event) => {
    addLog('ボタンがクリックされました');
    event.stopPropagation();
  };

  const clearLog = () => {
    setLog([]);
  };

  return (
    <div>
      <h2>イベント伝播デモ</h2>

      {/* 外側のエリア */}
      <div
        onClick={handleOuterClick}
        style={{
          border: '5px solid green',
          padding: 20,
        }}
      >
        <p>外側のエリア</p>

        {/* 内側のエリア */}
        <div
          onClick={handleInnerClick}
          style={{
            border: '5px solid pink',
            padding: 10
          }}
        >
          <p>内側のエリア</p>

          {/* ボタン（伝播を止める） */}
          <button onClick={handleButtonClick}>クリック（伝播を止める）</button>
        </div>
      </div>

      <button onClick={clearLog} style={{marginTop: '10px'}}>ログをクリア</button>

      <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0'}}>
        <h3>イベントログ:</h3>
        {log.length === 0 ? (
          <p>まだイベントが発生していません</p>
        ) : (
          <ul>
            {log.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
