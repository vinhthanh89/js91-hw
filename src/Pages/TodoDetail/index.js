import { useParams } from "react-router-dom";

import TODOS from "../../Data/todo";

const TodoDetail = () => {
    const urlParams = useParams();
    const taskItem = TODOS.find(todo => todo.id === urlParams.todoId);
    const {task , isCompleted , isEdited } = taskItem;

 
    return (
        <div className="task-detail">
            <p>id : {urlParams.todoId}</p>
            <p>task : {`${task}`}</p>
            <p>isCompleted : {`${isCompleted}`}</p>
            <p>isEdited : {`${isEdited}`}</p>
        </div>
    )
}

export default TodoDetail;