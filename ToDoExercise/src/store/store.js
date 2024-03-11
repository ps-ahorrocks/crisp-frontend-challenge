import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks"
import categoryReducer from "./categories"

export default configureStore({
    reducer: {
        tasks: taskReducer,
        categories: categoryReducer
    }
})