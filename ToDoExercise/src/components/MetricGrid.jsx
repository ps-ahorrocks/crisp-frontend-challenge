import React from "react";
import { Grid } from "@mui/material";
import TasksCompleted from "./TasksCompleted";
import TasksOpen from "./TasksOpen";
import TasksDuration from "./TasksDuration";

const MetricGrid = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <h1 style={{ marginLeft: "32px" }}>Task Metrics</h1>
      <TasksCompleted />
      <TasksOpen />
      <TasksDuration />
    </Grid>
  );
};

export default MetricGrid;
