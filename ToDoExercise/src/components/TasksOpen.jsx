import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const TasksOpen = () => {
  const getOpenTasks = createSelector(
    (state) => state.tasks.storedTasks,
    (storedTasks) => storedTasks.filter((task) => task.completed == false)
  );

  const openTasks = useSelector(getOpenTasks);

  return <h2 style={{ marginLeft: "32px" }}>Tasks Open: {openTasks.length}</h2>;
};

export default TasksOpen;
