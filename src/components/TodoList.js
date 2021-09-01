import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todoList">
      <ul className="list-group">
        {todos.map((item) => (
          <Todo
            key={item.id}
            description={item.description}
            done={item.isDone}
            todo={item}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
