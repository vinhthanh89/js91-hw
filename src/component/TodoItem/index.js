import { CheckCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";
import { useState } from "react";

import "./style.css";

const TodoItem = ({
  todo,
  handleIsComplete,
  handleIsEdited,
  handleDelete,
  handleEditTask,
}) => {
  const { id, task, isCompleted, isEdited } = todo;
  const [newTask, setNewTask] = useState(task);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditTask(id, newTask);
    handleIsEdited(id);
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleCancle = () => {
    setNewTask(task);
    handleIsEdited(id);
  }

  return (
    <div className="task-item__container">
      {isEdited ? (
        <div className="edit-item__container">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="text" value={newTask} onChange={handleChange} />
            </div>
            <div className="button__container">
              <div className="button-delete">
                <button
                  type="button"
                  onClick={() => handleDelete(id)}
                  className="button"
                >
                  Delete
                </button>
              </div>
              <div className="button-edit">
                <button
                  type="reset"
                  value={newTask}
                  onClick={handleCancle}
                  className="button"
                >
                  Cancel
                </button>
                <button type="submit" className="button btn-save">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="task-item">
          <div className="task">
            <div className={`checkBox ${isCompleted ? "completed" : ""}`}>
              <CheckCircleFill
                onClick={() => {
                  handleIsComplete(id);
                }}
              />
            </div>
            <div className={`todo-task ${isCompleted ? "finish" : ""}`}>
              <span>{task}</span>
            </div>
          </div>
          <div className="edit-button">
            <ThreeDotsVertical
              onClick={() => {
                handleIsEdited(id);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
