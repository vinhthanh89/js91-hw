import { useState } from "react";
import {PlusCircleFill} from "react-bootstrap-icons"
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({handleAddTodo}) => {
    const [addTodo, setAddTodo] = useState(false);
    const [newTodo, setNewTodo] = useState({
        id: uuidv4(),
        task: "",
        isCompleted: false,
        isEdited: false,
      });

      const handleChangeTask = (event) => {
        setNewTodo({ ...newTodo, task: event.target.value });
      };

      const handleSubmitAddTodo = (event) => {
        event.preventDefault();
        handleAddTodo(newTodo);
        setNewTodo({
            id: uuidv4(),
            task: "",
            isCompleted: false,
            isEdited: false,
          });
        setAddTodo(false);
      }

    return (
        <div className="add-item__container">
        {addTodo ? (
          <div className="edit-item__container">
            <form onSubmit={handleSubmitAddTodo}>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="What are you working on ?"
                  onChange={handleChangeTask}
                />
              </div>
              <div className="button__container">
                <div className="button-delete" style={{ visibility: "hidden" }}>
                  <button type="button" className="button">
                    Delete
                  </button>
                </div>
                <div className="button-edit">
                  <button
                    type="button"
                    className="button"
                    onClick={() => setAddTodo(false)}
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
          <button
            type="button"
            className="add-button"
            onClick={() => setAddTodo(true)}
          >
            <span className="icon">
              <PlusCircleFill />
            </span>
            <span>Add Task</span>
          </button>
        )}
      </div>
    )
}

export default AddTodo;