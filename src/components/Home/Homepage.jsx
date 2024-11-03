import Typography from '@mui/material/Typography';
import TodoItem from './TodoItem';
import { useState } from 'react';
import { Button } from '@mui/material';

const todo = {
    _id: "123adas123dasd",
    titile: "Подстричься",
    description: "Сходить в парикмахерскую",
    isDone: true,
}

function Homepage(props){
    const [todos, setTodos] =useState([todo])

    const handleAddTodo = ()=>{
        const newTodo = {
            _id: Date.now().toString(),
            titile: "Подстричься",
            description: "Сходить в парикмахерскую",
            isDone: true,
        }
        setTodos([newTodo, ...todos])
    }

    return (
        <div>
            <Typography>{props.username}</Typography>
            <Button onClick={handleAddTodo}>Добавить дело</Button>
            {todos.map((item)=>{
                return <TodoItem todo={item} key={item._id} />
            })}
        </div>
    )
}

export default Homepage