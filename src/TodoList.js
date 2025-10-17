import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', completed: false },
    { id: 2, text: 'コンポーネントを作る', completed: false },
    { id: 3, text: 'useStateを理解する', completed: true }
  ]);

  return (
    <div>
      <h2>ToDoリスト</h2>
      <ul>
        {/* TODO(human): todos配列をmapを使ってリスト表示してください */}
        {/* ヒント: todos.map((todo) => { return <li key={todo.id}>...</li> }) */}
        {/* 各todoオブジェクトには id, text, completed プロパティがあります */}
        {/* key属性には必ずtodo.idを指定してください */}


        { /*  momo   mapは{}ブロック内で記述  */}
        {
          todos.map((todo) =>{
            return <li key={todo.id}>{todo.text}</li>
          })
        }  
      </ul>
    </div>
  );
}
