import { DeleteOutline } from '@mui/icons-material'
import { IconButton, ListItem, ListItemText } from '@mui/material'
import React, { FC } from 'react'

interface ITodoItem {
    todo:ITodoType
    toggleTodo: ToggleFn  
    deleteTodo: DeleteFn
}
const TodoItem: FC<ITodoItem> = ({todo, toggleTodo, deleteTodo}) => {
    return (
      <ListItem
      disableGutters
      sx={{padding:"1rem", cursor:"pointer"}}
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteOutline sx={{"&:hover":{color:"red"}}} onClick={() => deleteTodo(todo.id)} />
        </IconButton>
      }
    >
      <ListItemText primary={todo.task} onClick={()=>toggleTodo(todo)} />
    </ListItem>
    )
  }
  

export default TodoItem