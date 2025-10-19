import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', completed: false },
    { id: 2, text: 'コンポーネントを作る', completed: false },
    { id: 3, text: 'useStateを理解する', completed: true },
    { id: 4, text: 'リストの絞り込みを実装', completed: false },
    { id: 5, text: 'ソート機能を追加', completed: true }
  ]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('none');
  const [newTodoText, setNewTodoText] = useState('');

  // ToDoを追加
  const addTodo = () => {
    const newId = todos.length === 0 ? 1 : Math.max(...todos.map(t => t.id)) + 1;
    setTodos([...todos, { id: newId, text: newTodoText, completed: false }]);
    setNewTodoText('');
  };

  // ToDoを削除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 絞り込み処理
  const filteredTodos = todos.filter((todo) => {
    return filter === 'all' || filter === 'completed' && todo.completed || filter === 'active' && !todo.completed
  });

  // ソート処理
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if(sortBy==='text-asc') return a.text.localeCompare(b.text)
    if(sortBy==='text-desc') return b.text.localeCompare(a.text)
    if(sortBy==='completed') return b.completed - a.completed
    return 0
  });

  return (
    <div>
      <h2>ToDoリスト</h2>

      {/* 新しいToDoを追加 */}
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="新しいToDoを入力"
        />
        <button onClick={addTodo} disabled={newTodoText.trim() === ''}>追加</button>
      </div>

      {/* フィルターボタン */}
      <div>
        <button onClick={() => setFilter('all')}>すべて</button>
        <button onClick={() => setFilter('active')}>未完了</button>
        <button onClick={() => setFilter('completed')}>完了済み</button>
      </div>

      {/* ソートボタン */}
      <div>
        <button onClick={() => setSortBy('none')}>ソートなし</button>
        <button onClick={() => setSortBy('text-asc')}>名前順（昇順）</button>
        <button onClick={() => setSortBy('text-desc')}>名前順（降順）</button>
        <button onClick={() => setSortBy('completed')}>完了状態順</button>
      </div>

      <ul>
        {
          sortedTodos.map((todo) =>{
            return (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>削除</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
