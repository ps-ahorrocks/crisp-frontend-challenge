import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const TasksCompleted = () => {
  const getCompletedTasks = createSelector(
    (state) => state.tasks.storedTasks,
    (storedTasks) => storedTasks.filter((task) => task.completed == true)
  );

  const completedTasks = useSelector(getCompletedTasks);

  return (
    <h2 style={{ marginLeft: "32px" }}>
      Tasks Completed: {completedTasks.length}
    </h2>
  );
};

export default TasksCompleted;
