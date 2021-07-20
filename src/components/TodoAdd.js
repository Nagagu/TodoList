import { TextField, PrimaryButton } from "@fluentui/react";
import React, { useState } from "react";

function TodoAdd({ todos, setTodos }) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        description: inputText,
        done: false,
      },
    ]);
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
