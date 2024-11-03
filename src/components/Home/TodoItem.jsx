import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';

function TodoItem(props) {
    const todo = props.todo
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom>
          {todo.titile}
        </Typography>
        <Typography variant="body2">
          {todo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox checked={todo.isDone}/>
        <Button size="small">Редактировать</Button>
        <Button size="small" sx={{backgroundColor: 'red', color:'white'}}>Удалить</Button>
      </CardActions>
    </Card>
  )
}

export default TodoItem