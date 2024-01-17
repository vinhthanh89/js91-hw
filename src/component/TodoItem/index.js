import { CheckCircleFill, ThreeDotsVertical } from "react-bootstrap-icons";

import "./style.css";

const TodoItem = ({todo , handleChecked , handleDelete}) => {
    const {id , task, isCompleted } = todo
  return (
    <div className="task">
      <div className="task__todo">
        <div className={`icon todo__icon ${isCompleted ? "completed" : ""}`}>
          <CheckCircleFill onClick={()=>handleChecked(id)}/>
        </div>
        <span className={`todo ${isCompleted ? "completed" : ""}`}>{task}</span>
      </div>
      <div className="task__button">
        <div className="icon edit__icon">
          <ThreeDotsVertical onClick={() => handleDelete(id)}/>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
