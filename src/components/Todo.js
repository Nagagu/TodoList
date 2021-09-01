import React from "react";

function Todo({ description, todo, setTodos }) {
  const markToDoPost = () => {
    debugger;
    const selectedToDo = { id: todo.id, isDone: todo.isDone };
    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedToDo),
    };
    fetch(process.env.REACT_APP_API_ENDPOINT + "ToDo/MarkToDo", requestOptions)
      //.then((o) => o.json())
      .then(() => {
        setTodos((todos) =>
          todos.map((item) => {
            if (item.id === todo.id) {
              return { ...item, isDone: selectedToDo.isDone };
            }
            return item;
          })
        );
      });
  };

  const handleDone = () => {
    todo.isDone = !todo.isDone;
    markToDoPost();
    // setTodos((todos) =>
    //   todos.map((item) => {
    //     if (item.id === todo.id) {
    //       return { ...item, done: !item.done };
    //     }
    //     return item;
    //   })
    // );
  };
  return (
    <>
      <li className={`list-items ${todo.isDone ? "completed" : ""}`}>
        <input
          className="form-check-input"
          type="checkbox"
          onChange={handleDone}
          id="flexCheckDefault"
          checked={todo.isDone}
        />

        <span>{description}</span>
      </li>
    </>
  );
}

export default Todo;
