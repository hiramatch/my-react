import { useState } from 'react';

export default function AgeChecker() {
  const [age, setAge] = useState(0);

  // インラインスタイル（既存）
  const style = {
    color: age < 13 ? 'blue' : (age < 20 ? 'orange' : 'green'),
  };

  // 年齢に応じたクラス名とカテゴリー
  const className = age < 13 ? 'child' : (age < 20 ? 'teen' : 'adult');
  const ageCategory = age < 13 ? '子供' : (age < 20 ? '未成年' : '成人');

  return (
    <div>
      <h2>年齢チェッカー</h2>

      <div>
        <label>年齢: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>

      {/* インラインスタイル版 */}
      <p style={style}>{ageCategory}</p>

      {/* className版 */}
      {age > 0 && <p className={className}>{ageCategory}</p>}

      {age >= 18 && <p>投票できます</p>}
    </div>
  );
}
