import { useState } from 'react';

export default function SimpleForm() {
  const [name, setName] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(name);
    setName('');
  };

  return (
    <div>
      <h2>シンプルなフォーム</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            名前:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>

        <button type="submit">送信</button>
      </form>

      {submittedData && <p>送信されたデータ: {submittedData}</p>}
    </div>
  );
}
