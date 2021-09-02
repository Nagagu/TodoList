import React, { useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { DefaultButton, PrimaryButton, Toggle } from "@fluentui/react";

function Form() {
  const [showTodoDiv, setShowAddTodoDiv] = useState(false);
  const [showAllTodos, setShowAllTodos] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_API_ENDPOINT + "ToDo/GetAll";
    fetch(url)
      .then((o) => o.json())
      .then((o) => setTodos(o));
  }, []);

  const handleShowAddTodo = () => {
    setShowAddTodoDiv(!showTodoDiv);
  };

  const handleShowTodos = () => {
    setShowAllTodos(!showAllTodos);
  };

  // const [todos, setTodos] = useState(
  //   localStorage.getItem("todos")
  //     ? JSON.parse(localStorage.getItem("todos"))
  //     : []
  // );

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <h1>To-Do App</h1>
      <hr />
      <Toggle
        label={<div>Show tasks</div>}
        onText="All"
        offText="Pending"
        onChange={handleShowTodos}
        defaultChecked
      />
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
          showAllTodos ? todos : todos.filter((item) => item.isDone === false)
        }
        setTodos={setTodos}
      />
      {/* <DefaultButton onClick={handleShowAllTodos}>Show All</DefaultButton>
      <DefaultButton onClick={handleShowUndoneTodos}>
        Pending Tasks
      </DefaultButton> */}
    </>
  );
}

export default Form;
