import React from "react";
import { Grid } from "@mui/material";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import UndoButton from "./UndoButton";

const TaskGrid = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <h1 style={{ marginLeft: 32 }}>Todo List</h1>
      <Grid item xs={6} style={{ padding: 32 }}>
        <AddTaskForm />
      </Grid>
      <Grid item xs={6} style={{ padding: 32 }}>
        <TaskList />
      </Grid>
      <Grid item xs={6} style={{ marginRight: 32, marginBottom: 32 }}>
        <UndoButton />
      </Grid>
    </Grid>
  );
};

export default TaskGrid;
