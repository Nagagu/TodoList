import React from "react";

function Todo({ description, todo, setTodos }) {
  const handleDone = () => {
    setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };
  return (
    <>
      <li className={`list-items ${todo.done ? "completed" : ""}`}>
        <input
          className="form-check-input"
          type="checkbox"
          onChange={handleDone}
          id="flexCheckDefault"
          checked={todo.done}
        />

        <span>{description}</span>
      </li>
    </>
  );
}

export default Todo;
