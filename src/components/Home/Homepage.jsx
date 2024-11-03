import Typography from '@mui/material/Typography';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { CircularProgress } from '@mui/material';


function Homepage(props){
    const [todos, setTodos] =useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { enqueueSnackbar } = useSnackbar()

    const getTodos = async ()=>{
        try {
            setIsLoading(true)
            const response = await axios.get('https://todos-be.vercel.app/todos',{
                headers: {
                    "Authorization": `Bearer ${props.user.access_token}`
                }
            })
            setTodos(response.data)
        } catch (e) {
            enqueueSnackbar(e.response?.data?.message || "ошибка сервера", {
                variant: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleAddTodo = async (title, description)=>{
        try {
            setIsLoading(true)
            const response = await axios.post('https://todos-be.vercel.app/todos',{
               title,
               description  
            },{
                headers: {
                    "Authorization": `Bearer ${props.user.access_token}`
                }
            })
            await getTodos()
        } catch (e) {
            enqueueSnackbar(e.response?.data?.message || "ошибка сервера", {
                variant: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteTodo = async (_id)=>{
        try {
            setIsLoading(true)
            const response = await axios.delete('https://todos-be.vercel.app/todos/'+_id,{
                headers: {
                    "Authorization": `Bearer ${props.user.access_token}`
                }
            })
            await getTodos()
        } catch (e) {
            enqueueSnackbar(e.response?.data?.message || "ошибка сервера", {
                variant: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleDoneTodo = async (_id)=>{
        try {
            setIsLoading(true)
            const response = await axios.patch('https://todos-be.vercel.app/todos/'+_id,{
                completed: !todos.find(item=>item._id ===_id).completed
            },{
                headers: {
                    "Authorization": `Bearer ${props.user.access_token}`
                }
            })
            await getTodos()
        } catch (e) {
            enqueueSnackbar(e.response?.data?.message || "ошибка сервера", {
                variant: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleUpdateTodo = async (_id, title, description)=>{
        try {
            setIsLoading(true)
            const response = await axios.patch('https://todos-be.vercel.app/todos/'+_id,{
                title,
                description,
            },{
                headers: {
                    "Authorization": `Bearer ${props.user.access_token}`
                }
            })
            await getTodos()
        } catch (e) {
            enqueueSnackbar(e.response?.data?.message || "ошибка сервера", {
                variant: 'error'
            })
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        if(props.user.access_token){
            getTodos()
        }
    },[props.user.access_token])

    if(isLoading){
        return <CircularProgress/>
    }

    return (
        <div>
            <Typography>{props.user.username}</Typography>
            <AddTodo addTodo={handleAddTodo} isLoading={isLoading}/>
            {todos.map((item)=>{
                return (
                <TodoItem 
                    todo={item}
                    key={item._id}
                    handleDeleteTodo={handleDeleteTodo}
                    handleDoneTodo={handleDoneTodo}
                    handleUpdateTodo={handleUpdateTodo}
                    isLoading={isLoading}
                />)
            })}
        </div>
    )
}

export default Homepage