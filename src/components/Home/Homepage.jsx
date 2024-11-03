import Typography from '@mui/material/Typography';
import TodoItem from './TodoItem';
import { useState } from 'react';
import { Button } from '@mui/material';
import AddTodo from './AddTodo';

const todo = {
    _id: "123adas123dasd",
    title: "Подстричься",
    description: "Сходить в парикмахерскую",
    isDone: true,
}

function Homepage(props){
    const [todos, setTodos] =useState([todo])

    const handleAddTodo = (title, description)=>{
        const newTodo = {
            _id: Date.now().toString(),
            title,
            description,
            isDone: false,
        }
        setTodos([newTodo, ...todos])
    }

    const handleDeleteTodo = (_id)=>{
        setTodos(todos.filter((item)=>{return item._id !== _id}))
    }

    const handleDoneTodo = (_id)=>{
        setTodos(todos.map((item)=>{
            return item._id === _id 
                ? {...item, isDone: !item.isDone}
                : item 
        }))
    }

    const handleUpdateTodo = (_id, title, description)=>{
        setTodos(todos.map((item)=>{
            return item._id === _id 
                ? {...item, title, description}
                : item 
        }))
    }

    return (
        <div>
            <Typography>{props.username}</Typography>
            <AddTodo addTodo={handleAddTodo}/>
            {todos.map((item)=>{
                return <TodoItem 
                todo={item}
                 key={item._id}
                  handleDeleteTodo={handleDeleteTodo}
                  handleDoneTodo={handleDoneTodo}
                  handleUpdateTodo={handleUpdateTodo}
                   />
            })}
        </div>
    )
}

export default Homepage