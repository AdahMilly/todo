import React from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

import { Button } from "@mui/material";

const AddTodo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // maxWidth: "50%",
        gap: "20px",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}>
      <h1 style={{ textAlign: "center" }}>Add Todo</h1>
      <TextField variant="outlined" />
      <Button
        variant="contained"
        style={{ height: "25%", alignItem: "center" }}>
        Add Todo
      </Button>
    </Box>
  );
};
export default AddTodo;
