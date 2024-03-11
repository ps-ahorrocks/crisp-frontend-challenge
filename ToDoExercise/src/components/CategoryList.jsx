import {
  CardHeader,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { availableCategories, categoryChanged } from "../store/categories";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleClick = (category) => {
    let logFilter = `Clicked ${category.name}`;
    console.log(logFilter);
    dispatch(categoryChanged(category));
  };

  return (
    <List>
      <ListSubheader>Categories</ListSubheader>
      {availableCategories.map((category) => (
        <ListItemButton
          key={category.id}
          selected={category.id == categories.currentCategory.id}
          onClick={() => handleClick(category)}
        >
          {category.name}
        </ListItemButton>
      ))}
    </List>
  );
};

export default CategoryList;
