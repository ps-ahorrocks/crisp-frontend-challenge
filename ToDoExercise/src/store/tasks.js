import { createSlice } from "@reduxjs/toolkit"

let lastID = 0;
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {storedTasks: [
            // { id: 1, title: "task1", category: "work", completed: true, timeOpen: 1709944275159, timeComplete: 1709944295159 },
            // { id: 2, title: "task2", category: "work", completed: false, timeOpen: 1709944275159 },
            // { id: 3, title: "task3", category: "work", completed: false, timeOpen: 1709944275159 },
            // { id: 4, title: "task4", category: "work", completed: false, timeOpen: 1709944275159 },
            // { id: 5, title: "task5", category: "personal", completed: false, timeOpen: 1709944275159 },
        ],
        history: []
    },
    reducers: {
        taskAdded: (tasks, action) => {
            lastID++;
            //tasks.list.push(action.payload);
            tasks.storedTasks.push({id: lastID, title: action.payload.title, category: action.payload.category, completed: false, timeOpen: Date.now()});
            //state.push({id: lastID, title: action.payload.title, category: action.payload.category, completed: false});
            tasks.history.push({type: ADD_TASK, payload: tasks.storedTasks[tasks.storedTasks.length - 1]});
        },
        taskCompleted: (tasks, action) => {
            const index = tasks.storedTasks.findIndex(task => task.id == action.payload.id);
            tasks.storedTasks[index].completed = true;
            tasks.storedTasks[index].timeComplete = Date.now();
        },
        taskUnCompleted: (tasks, action) => {
            const index = tasks.storedTasks.findIndex(task => task.id == action.payload.id);
            tasks.storedTasks[index].completed = false;
        },
        taskDeleted: (tasks, action) => {
            const index = tasks.storedTasks.findIndex(task => task.id == action.payload.id);
            tasks.history.push({type: DELETE_TASK, payload: tasks.storedTasks[index]});
            tasks.storedTasks.splice(index, 1);
        },
        taskEdited: (tasks, action) => {
            const index = tasks.storedTasks.findIndex(task => task.id == action.payload.id);
            tasks.storedTasks[index].title = action.payload.title;
            tasks.storedTasks[index].category = action.payload.category;
        },
        actionUndone: (tasks) => {
            const lastAction = tasks.history.pop();
            if (lastAction) {
                switch (lastAction.type) {
                    case ADD_TASK:
                        tasks.storedTasks.pop();
                        break;
                    case DELETE_TASK:
                        tasks.storedTasks.push(lastAction.payload);
                        break;
                    default:
                        break;
                }
            }
        }
    }
});

export const {
    taskAdded,
    taskCompleted,
    taskUnCompleted,
    taskDeleted,
    taskEdited,
    actionUndone
} = taskSlice.actions;
export default taskSlice.reducer;