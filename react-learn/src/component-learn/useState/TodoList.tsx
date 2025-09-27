import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 1; i < 1; i++) {
    initialTodos.push({
      id: i,
      text: "text" + (i + 1),
    });
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState("");

  return (
    <div className="my-10">
      <input
        className="bg-transparent border"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          setText("");
          setTodos([
            // ...todos,    ### it id use for count the index of number hehaver from previous index.

            {
              id: todos.length + 1,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        add
      </button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.id} .{item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
