import { useState } from 'react';

export default function AgeChecker() {
  const [age, setAge] = useState(0);

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

      {/* TODO(human): 年齢に応じて異なるメッセージを表示してください */}
      {/* 条件: age < 13 なら「子供」、age < 20 なら「未成年」、age >= 20 なら「成人」 */}
      {/* ヒント: 三項演算子をネストして使うか、if文で変数に代入してから表示します */}
      {/* 例: <p>{age < 20 ? '未成年です' : '成人です'}</p> */}

      <p>{age < 13 ? '子供' : (age < 20 ? '未成年' : '成人')}</p>

      {/* TODO(human): age が 0 より大きい場合のみメッセージを表示してください */}
      {/* ヒント: 論理AND演算子 && を使います */}
      {/* 例: {age > 0 && <p>メッセージ</p>} */}
      {
        age > 0 && <p>年齢が入力されています</p>
      }

      {/* TODO(human): age が 18 以上なら「投票できます」というメッセージを表示してください */}
      {/* age が 18 未満なら何も表示しない */}
      {
        age >= 18 && <p>投票できます</p>
      }
    </div>
  );
}
