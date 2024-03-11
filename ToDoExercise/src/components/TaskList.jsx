import React from "react";
import TaskItem from "./TaskItem";
import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const TaskList = () => {
  const categories = useSelector((state) => state.categories);

  const getCurrentTasks = createSelector(
    (state) => state.tasks.storedTasks,
    (storedTasks) =>
      categories.currentCategory.value != "" &&
      storedTasks.filter(
        (task) => task.category == categories.currentCategory.value
      )
  );

  const currentTasks = useSelector(getCurrentTasks);

  const tasks = useSelector((state) => state.tasks.storedTasks);

  return (
    <List>
      {categories.currentCategory.value != "" &&
        currentTasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            category={task.category}
            completed={task.completed}
          />
        ))}
      {categories.currentCategory.value == "" &&
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            category={task.category}
            completed={task.completed}
          />
        ))}
    </List>
  );
};

export default TaskList;
