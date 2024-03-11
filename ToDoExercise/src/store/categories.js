import { createSlice } from "@reduxjs/toolkit"
import categories from "../data/categories"

export const availableCategories = [
    {id: 1, name: "All", value: "" },
    {id: 2, name: "Personal", value: "personal" },
    {id: 3, name: "Work", value: "work" }
]

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        currentCategory: availableCategories[0]
    },
    reducers: {
        categoryChanged: (categories, action) => {
            categories.currentCategory = action.payload;
        }
    }
});

export const {
    categoryChanged
} = categorySlice.actions;
export default categorySlice.reducer;