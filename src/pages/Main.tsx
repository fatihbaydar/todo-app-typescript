import React from "react";
import Header from "../component/Header";
import { Container } from "@mui/material";
import AddTodo from "../component/AddTodo";

const Main = () => {
  return (
    <Container>
      <Header />
      <AddTodo/>
    </Container>
  );
};

export default Main;
