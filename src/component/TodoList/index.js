import { useState } from "react";

import "./style.css";
import TODOS from "../../Data/todo";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(TODOS);

  const handleChecked = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.map((taskItem) =>
        taskItem.id === taskId
          ? { ...taskItem, isCompleted: !taskItem.isCompleted }
          : taskItem
      )
    );
  }

  const handleDelete = (taskId) => {
    setTodos((prevTodos) =>
      prevTodos.filter((taskItem) => taskItem.id !== taskId)
    );
  };

  const renderTodoList = todos.map((todo) => {
    return (
      <div className="task-container" key={todo.id}>
        <TodoItem
         todo={todo}
         handleChecked={handleChecked}
         handleDelete={handleDelete} />
      </div>
    );
  });

  return <div className="todolist">{renderTodoList}</div>;
};

export default TodoList;
