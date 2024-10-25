import { Save } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AddTodo = ({addTodo}) => {
  // const [task, setTask] = useState("") //! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde initial değerine göre otomatik type ataması yapıyor.
  const [task, setTask] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTask(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(task)
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      <TextField
        variant="outlined"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        // onChange={e =>setTask(e.target.value) }
        onChange = {handleChange}
      />
      <Button
        variant="contained"
        endIcon={<Save />}
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "10%" }, height: "55px", m: 1 }}
      >
        Save Todo
      </Button>
    </Box>
  );
};

export default AddTodo;
