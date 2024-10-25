import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Container } from "@mui/material";
import AddTodo from "../component/AddTodo";
import axios from "axios";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number; // id string veya number olabilir.
  owner?: string; //! bu alan zorunlu değil. bu veri gelmişse type da string
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

const Main = () => {
  // const [todos, setTodos] = useState([] as ITodoType[]);
  // const [todos, setTodos] = useState<Array<ITodoType>>([]);
  const [todos, setTodos] = useState<ITodoType[]>([]); //yaygın kullanım
  console.log(todos);
  const getTodos = async () => {
    try {
      const { data } = await axios(url);
      // const {data} = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //1.yol
  // const addTodo = async (task:string) => {
  //   try {
  //     await axios.post(url, { task, isDone: false });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //2.yol
  type AddFn = (task:string) => Promise<void>
  const addTodo:AddFn = async (task:string) => {
    try {
      await axios.post(url, { task, isDone: false });
      getTodos()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
    </Container>
  );
};

export default Main;
