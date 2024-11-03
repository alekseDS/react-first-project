import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';

function TodoItem(props) {
    const todo = props.todo
    const handleDeleteTodo = ()=>{
         props.handleDeleteTodo(todo._id)
    }

    const handleDoneTodo = ()=>{
        props.handleDoneTodo(todo._id)
    }


  return (
    <Card sx={{ minWidth: 275, backgroundColor: todo.isDone ? '#fff010' : undefined }}>
      <CardContent>
        <Typography gutterBottom>
          {todo.titile}
        </Typography>
        <Typography variant="body2">
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox checked={todo.isDone} onChange={handleDoneTodo}/>
        <Button size="small">Редактировать</Button>
        <Button size="small" sx={{backgroundColor: 'red', color:'white'}} onClick={handleDeleteTodo}>Удалить</Button>
      </CardActions>
    </Card>
  )
}

export default TodoItem