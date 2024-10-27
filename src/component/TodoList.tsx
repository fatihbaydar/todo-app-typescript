import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

interface ITodoList {
    todos: ITodoType[]
}
const TodoList: React.FC<ITodoList> = ({todos}) => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}
    >
      <Grid
        size={{ xs: 12, sm: 8, md: 5 }}
        position="relative"
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
        }}
      >
        <Typography>
            In Progress Todos
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TodoList;
