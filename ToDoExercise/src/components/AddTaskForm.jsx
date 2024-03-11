import {
  MenuItem,
  Select,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { taskAdded } from "../store/tasks";

const AddTaskForm = () => {
  const [category, setCategory] = useState("");
  const [textValue, setTextValue] = useState("");

  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Category:", category);
    console.log("Text Value:", textValue);
    dispatch(
      taskAdded({
        title: textValue,
        category: category,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Text"
            variant="outlined"
            fullWidth
            value={textValue}
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
  );
};

export default AddTaskForm;
