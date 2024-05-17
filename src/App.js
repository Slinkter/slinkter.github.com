import React, { useReducer, useState } from "react";
import { log } from "xstate";
import { update } from "xstate/lib/actionTypes";

const types = {
  add: "add",
  update: "update",
  delete: "delete",
};

const initialState = [{ id: 1, title: "todo #1" }];

const reducer = (state, action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];
    case types.update:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case types.delete:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const onAdd = (e) => {
    e.preventDefault();
    if (!text) {
      alert("texto vacio");
      return;
    }
    const newTodo = { id: Date.now(), title: text };
    dispatch({ type: types.add, payload: newTodo });
    setText("");
  };
  const onUpdate = (todo) => {
    if (!text) {
      alert("texto vacio");
      return;
    }
    const updateTodo = { ...todo, title: text };
    dispatch({ type: types.update, payload: updateTodo });
  };
  const onDelete = (todo) => {
    dispatch({ type: types.delete, payload: todo });
  };

  return (
    <>
      <form onSubmit={(e) => onAdd(e)}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">add</button>
      </form>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onDelete(todo)}>delete</button>
            <button onClick={() => onUpdate(todo)}>update</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
