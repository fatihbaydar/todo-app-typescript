import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";
interface ITodoList {
  todos: ITodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn
}

//* 3.yol React.FC kullanımı
//! React.FC, bir functional component'i ifade eder. Bileşenin işlevsel bir yapıda olduğunu ve React tarafından kullanılabileceğini belirtir.

//? React.FC, bileşenlere props tanımlamak ve JSX döndürmek için kullanılan bir genel tip (generic type) olarak kullanılır. Bu tip, bileşenin alacağı props'ların tipini belirtmek için kullanılır. Props'ların tipini belirtmek, bileşenin daha güvenli ve hatasız olmasını sağlar.

//* Ancak, React.FC kullanmak zorunlu değildir. Fonksiyonel bir bileşen, sadece fonksiyon olarak da tanımlanabilir ve React.FC kullanmadan da props alabilir ve JSX döndürebilir.

//+ FC, "FunctionComponent" kelimelerinin kısaltmasıdır.

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  const InProgressTodos = todos.filter((todo) => !todo.isDone);
  const CompletedTodos = todos.filter((todo) => todo.isDone);

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
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
        >
          In Progress Todos
        </Typography>
        {InProgressTodos.length ? (
          InProgressTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo= {deleteTodo} />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Progress Todos!
          </Typography>
        )}
      </Grid>
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
        <Typography
          className="title"
          sx={{ color: "green" }}
          align="center"
          variant="h4"
        >
          Completed Todos
        </Typography>
        {CompletedTodos.length ? (
          CompletedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo= {deleteTodo}/>
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
