import { useState } from "react";
import React from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  Grid,
  Typography,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  ListItemButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TimelineIcon from "@mui/icons-material/Timeline";
import "./App.css";
import CategoryList from "./components/CategoryList";
import TaskGrid from "./components/TaskGrid";
import { Provider } from "react-redux";
import MetricGrid from "./components/MetricGrid";

function App() {
  //const [count, setCount] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("tasks");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const viewTasks = () => {
    setCurrentPage("tasks");
    toggleDrawer();
  };
  const viewMetrics = () => {
    setCurrentPage("metrics");
    toggleDrawer();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Management Center
          </Typography>
          <div style={{ flex: 1 }} />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItemButton selected={currentPage == "tasks"} onClick={viewTasks}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Task View" />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton
            selected={currentPage == "metrics"}
            onClick={viewMetrics}
          >
            <ListItemIcon>
              <TimelineIcon />
            </ListItemIcon>
            <ListItemText primary="Metric View" />
          </ListItemButton>
        </List>
      </Drawer>
      <div style={{ marginTop: "100px", marginLeft: "64px" }}>
        {currentPage == "tasks" && (
          <Grid container spacing={2}>
            <Grid item xs={3} bgcolor="#fafafa" style={{ padding: 16 }}>
              <Paper>
                <CategoryList />
              </Paper>
            </Grid>
            <Grid item xs={8} bgcolor="#fafafa" style={{ padding: 16 }}>
              <Paper style={{ marginTop: 16 }}>
                <TaskGrid />
              </Paper>
            </Grid>
          </Grid>
        )}
        {currentPage == "metrics" && (
          <Grid container spacing={2}>
            <Grid item xs={8} bgcolor="#fafafa" style={{ padding: 16 }}>
              <Paper style={{ marginTop: 16 }}>
                <MetricGrid />
              </Paper>
            </Grid>
          </Grid>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
