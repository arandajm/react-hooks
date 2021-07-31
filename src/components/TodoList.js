import React, { useState } from "react";

const TodoList = () => {
  // Manage state into functional component with useState hook.
  const [todos, setTodos] = useState([
    { text: "Pay bills", id: 1 },
    { text: "Do your homework", id: 2 },
    { text: "Feed the dog", id: 3 },
  ]);

  const addTodo = () =>
    // Add a new todo into the todo list
    setTodos([...todos, { text: "learn hooks", id: todos.length + 1 }]);
  return (
    <div>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add a todo</button>
    </div>
  );
};

export default TodoList;
