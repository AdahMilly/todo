import React from "react";
import TodosData from "./Api.json";

import {
  Grid,
  Button,
  ListItemSecondaryAction,
  CircularProgress,
  ListItemIcon,
} from "@mui/material";
// import { MdAdd } from "react-icons/md";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Checkbox from "@mui/material/Checkbox";

const Todos = (props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List sx={{ width: "60%", bgcolor: "grey", margin: "auto" }}>
            {TodosData.map((TodoDetail, index) => (
              <ListItem>
                <ListItemText primary={TodoDetail.id} />
                <ListItemText primary={TodoDetail.title} />
                <ListItemIcon>
                  <Checkbox primary={TodoDetail.completed} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Todos;
