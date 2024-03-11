import { Button, Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { actionUndone } from "../store/tasks";
import { useSelector } from "react-redux";

const UndoButton = () => {
  const dispatch = useDispatch();

  const history = useSelector((state) => state.tasks.history);

  const handleUndo = (event) => {
    dispatch(actionUndone());
  };

  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        variant="contained"
        color="secondary"
        disabled={history.length < 1}
        onClick={handleUndo}
      >
        UNDO
      </Button>
    </Box>
  );
};

export default UndoButton;
