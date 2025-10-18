import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validate = () => {
    const result = {};
    if (formData.name === '') {
      result.name = '名前は必須です';
    }
    if (formData.email === '' || formData.email.indexOf('@') === -1) {
      result.email = '有効なメールアドレスを入力してください';
    }
    if (formData.age === '' || isNaN(formData.age)) {
      result.age = '有効な年齢を入力してください';
    }
    if (Object.keys(result).length !== 0) {
      setErrors(result);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setFormData({
        name: '',
        email: '',
        age: ''
      });
      setErrors({});
    }
  };
  return (
    <div>
      <h2>登録フォーム</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>名前</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
        </div>

        <div>
          <label>メールアドレス</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
        </div>

        <div>
          <label>年齢</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p style={{color: 'red'}}>{errors.age}</p>}
        </div>

        <button type="submit">登録</button>
      </form>

      {submittedData && (
        <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#e8f5e9'}}>
          <h3>送信されたデータ:</h3>
          <p>名前: {submittedData.name}</p>
          <p>メールアドレス: {submittedData.email}</p>
          <p>年齢: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}
