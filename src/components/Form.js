import React, { useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

function Form() {
  const [showTodoDiv, setShowAddTodoDiv] = useState(false);
  const [showAllTodos, setShowAllTodos] = useState(true);

  const handleShowAddTodo = () => {
    setShowAddTodoDiv(!showTodoDiv);
  };

  const handleShowUndoneTodos = () => {
    setShowAllTodos(false);
  };

  const handleShowAllTodos = () => {
    setShowAllTodos(true);
  };

  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>To-Do App</h1>
      <hr />
      {showTodoDiv ? (
        <>
          <TodoAdd todos={todos} setTodos={setTodos} />
          <DefaultButton onClick={handleShowAddTodo} className="cancelButton">
            Cancel
          </DefaultButton>
        </>
      ) : (
        <PrimaryButton onClick={handleShowAddTodo}>+ Add New</PrimaryButton>
      )}

      <TodoList
        todos={
          showAllTodos ? todos : todos.filter((item) => item.done === false)
        }
        setTodos={setTodos}
      />
      <DefaultButton onClick={handleShowAllTodos}>Show All</DefaultButton>
      <DefaultButton onClick={handleShowUndoneTodos}>
        Pending Tasks
      </DefaultButton>
    </>
  );
}

export default Form;
