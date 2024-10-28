import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import { Container } from "@mui/material";
import AddTodo from "../component/AddTodo";
import axios from "axios";
import TodoList from "../component/TodoList";
import { notify, SweetIcon } from "../helper/sweetalert";

// interface ITodoType {
//   task: string;
//   isDone: boolean;
//   id: string | number; // id string veya number olabilir.
//   owner?: string; //! bu alan zorunlu değil. bu veri gelmişse type da string
// }

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
  // type AddFn = (task:string) => Promise<void>
  const addTodo:AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
      notify("Todo created", SweetIcon.SUCCESS)
      getTodos()
    } catch (error) {
      console.log(error);
      notify("Todo not created", SweetIcon.ERROR)
    }
  };

  const toggleTodo:ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone:!todo.isDone });
      notify("Todo updated", SweetIcon.SUCCESS)
      getTodos()
    } catch (error) {
      console.log(error);
      notify("Todo not updated", SweetIcon.ERROR)
    }
  };

  const deleteTodo:DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      notify("Todo deleted", SweetIcon.SUCCESS)
      getTodos()
    } catch (error) {
      console.log(error);
      notify("Todo not deleted", SweetIcon.ERROR)
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo = {deleteTodo}/>
    </Container>
  );
};

export default Main;
