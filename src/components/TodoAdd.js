import { TextField, PrimaryButton } from "@fluentui/react";
import React, { useState } from "react";

function TodoAdd({ todos, setTodos }) {
  const [inputText, setInputText] = useState("");

  const addTodoPost = () => {
    const newToDo = { description: inputText, isDone: false };

    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToDo),
    };
    fetch(process.env.REACT_APP_API_ENDPOINT + "ToDo/Add", requestOptions)
      .then((o) => o.json())
      .then((data) => {
        newToDo.id = data;
        setTodos([...todos, newToDo]);
      });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputText == "") {
      alert("Please add a ToDo");
      return;
    }
    addTodoPost();
    setInputText("");
  };

  return (
    <div class="input-group mb-3">
      <TextField
        class="form-goup"
        placeholder="add todo"
        value={inputText}
        onChange={handleInputChange}
        type="text"
        required
      />
      <PrimaryButton
        class="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        onClick={handleAddTodo}
      >
        Add Todo
      </PrimaryButton>
    </div>
  );
}

export default TodoAdd;
