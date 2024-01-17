import { v4 as uuidv4 } from 'uuid';

const TODOS = [
    {
        id: uuidv4(),
        task:"Doing homework",
        isCompleted: false,
        isEdited: false   
    },
    {
        id: uuidv4(),
        task:"Gym",
        isCompleted: false,
        isEdited: false   
    },
    {
        id: uuidv4(),
        task:"Read Book",
        isCompleted: false,
        isEdited: false   
    },
];

export default TODOS;
