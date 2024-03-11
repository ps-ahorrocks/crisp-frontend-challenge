import {
  Button,
  Checkbox,
  Icon,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
import {
  taskCompleted,
  taskUnCompleted,
  taskDeleted,
  taskEdited,
} from "../store/tasks";
import { useDispatch } from "react-redux";

const TaskItem = ({ id, title, category, completed }) => {
  const [open, setOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(category);
  const [editTextValue, setEditTextValue] = useState(title);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditCategory(category);
    setEditTextValue(title);
  };

  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    setEditCategory(event.target.value);
  };

  const handleTextChange = (event) => {
    setEditTextValue(event.target.value);
  };

  const handlecheck = (event) => {
    if (completed) {
      dispatch(
        taskUnCompleted({
          id: id,
        })
      );
    } else {
      dispatch(
        taskCompleted({
          id: id,
        })
      );
    }
  };

  const handleDelete = (event) => {
    dispatch(
      taskDeleted({
        id: id,
      })
    );
  };
  const handleEdit = (event) => {
    handleClickOpen();
    console.log("Edit clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edit Category:", editCategory);
    console.log("Edit Text Value:", editTextValue);
    dispatch(
      taskEdited({
        id: id,
        title: editTextValue,
        category: editCategory,
      })
    );
    handleClose();
  };

  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={completed} onChange={handlecheck} />
        </ListItemIcon>
        <ListItemText primary={title} />
        <ListItemText primary={category} />
        <ListItemIcon>
          <IconButton onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} style={{ padding: 16 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Text"
                  variant="outlined"
                  fullWidth
                  value={editTextValue}
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    value={category}
                    onChange={handleCategoryChange}
                    label="Category"
                  >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="personal">Personal</MenuItem>
                    <MenuItem value="work">Work</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-end">
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default TaskItem;
