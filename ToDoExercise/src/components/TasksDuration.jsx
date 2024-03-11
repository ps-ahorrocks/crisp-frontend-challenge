import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const TasksDuration = () => {
  const getCompletedTasks = createSelector(
    (state) => state.tasks.storedTasks,
    (storedTasks) => storedTasks.filter((task) => task.completed == true)
  );

  const completedTasks = useSelector(getCompletedTasks);

  const averageDuration =
    completedTasks.reduce(
      (acc, task) => acc + (task.timeComplete - task.timeOpen),
      0
    ) / completedTasks.length;

  const days = Math.floor(averageDuration / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (averageDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (averageDuration % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((averageDuration % (1000 * 60)) / 1000);

  return (
    <h2 style={{ marginLeft: "32px" }}>
      Average Duration: {days} days {hours} hours {minutes} minutes {seconds}{" "}
      seconds
    </h2>
  );
};

export default TasksDuration;
