import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoItem(props) {
    const todo = props.todo
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(todo.title || '')
    const [description, setDesc] = useState(todo.description || '')
    const navigate = useNavigate()

    const toggleIsEdit = ()=>{
        setIsEdit(!isEdit)
        if(isEdit){
            props.handleUpdateTodo(todo._id, title, description)
        }
    }

    const handChangeTitle = (e)=>{
        setTitle(e.target.value)
    }

    const handChangeDesc = (e)=>{
        setDesc(e.target.value)
    }

    const handleDeleteTodo = ()=>{
         props.handleDeleteTodo(todo._id)
    }

    const handleDoneTodo = ()=>{
        props.handleDoneTodo(todo._id)
    }


  return (
    <Card sx={{ minWidth: 275, backgroundColor: todo.completed ? '#fff010' : undefined }}>
      <CardContent>
        <Stack>
            {isEdit 
                ? <TextField 
                size='small' 
                label='Заголовок' 
                value={title} 
                onChange={handChangeTitle} 
                disabled={props.isLoading}
                />
                : <Typography 
                  gutterBottom 
                  sx={{cursor: 'pointer'}}
                  onClick={()=>{navigate(`todos/${todo._id}`)}}
                >
                {todo.title}
                </Typography>
            }
            {isEdit 
                ? <TextField 
                size='small' 
                label='Описание' 
                value={description} 
                onChange={handChangeDesc}
                disabled={props.isLoading}
                />
                : <Typography variant="body2">
                {todo.description}
                </Typography>
            }     
        </Stack>  
      </CardContent>
      <CardActions>
        <Checkbox checked={todo.completed} onChange={handleDoneTodo}/>
        <Button 
        size="small"
        onClick={toggleIsEdit}
        disabled={props.isLoading}
        >
            {isEdit ? "Сохранить" : "Редактировать"}
            </Button>
        <Button 
        size="small" 
        sx={{backgroundColor: 'red', color:'white'}} 
        onClick={handleDeleteTodo}
        disabled={props.isLoading}
        >
          Удалить
        </Button>
      </CardActions>
    </Card>
  )
}

export default TodoItem