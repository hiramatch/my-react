import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', completed: false },
    { id: 2, text: 'コンポーネントを作る', completed: false },
    { id: 3, text: 'useStateを理解する', completed: true },
    { id: 4, text: 'リストの絞り込みを実装', completed: false },
    { id: 5, text: 'ソート機能を追加', completed: true }
  ]);
  // TODO(human): フィルター用の状態を追加してください
  // ヒント: const [filter, setFilter] = useState('all');
  // filterの値は 'all', 'completed', 'active' のいずれかになります
  const [filter, setFilter] = useState('all')

  // TODO(human): 絞り込み処理を実装してください
  // ヒント: filteredTodos という変数を作成し、filter の値に応じて todos を絞り込みます
  // filter が 'all' なら全て、'completed' なら completed: true、'active' なら completed: false
  // 例: const filteredTodos = todos.filter((todo) => { 条件 });
  const filteredTodos = todos.filter((todo) => {
    return filter === 'all' || filter === 'completed' && todo.completed || filter === 'active' && !todo.completed
  })

  return (
    <div>
      <h2>ToDoリスト</h2>

      {/* フィルターボタン */}
      <div>
        <button onClick={() => setFilter('all')}>すべて</button>
        <button onClick={() => setFilter('active')}>未完了</button>
        <button onClick={() => setFilter('completed')}>完了済み</button>
      </div>

      <ul>
        {/* TODO(human): todos の代わりに filteredTodos を使ってください */}
        {
          filteredTodos.map((todo) =>{
            return <li key={todo.id}>{todo.text}</li>
          })
        }
      </ul>
    </div>
  );
}
