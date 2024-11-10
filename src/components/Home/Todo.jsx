import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CircularProgress, Stack, Typography } from '@mui/material'
import { ArrowBackIos, Tornado } from '@mui/icons-material'
import { NavLink, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectUser } from '../../lib/userSlice'

function Todo() {
    const [isLoading, setIsLoading] = useState(false)
    const [todo, setTodo] = useState()
    const user = useSelector(selectUser)
    const {enqueueSnackbar} = useSnackbar
    const {id} = useParams()

    useEffect(()=>{
        if(id){
            setIsLoading(true)
            axios.get('https://todos-be.vercel.app/todos/'+id,{
                headers: {
                    "Authorization": `Bearer ${user?.access_token}`
                }
            })
            .then(response =>{
                setTodo(response.data)
            })
            .catch((e)=>{
                enqueueSnackbar(e.response?.data?.message || "ошибка сервера", {
                    variant: 'error'
                })
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }
    },[id])

    if(!id) {
        return <div>
            <Typography variant='h3'>
                Такой айди не найден
            </Typography>
            <NavLink to={'/'}>
                Домой
            </NavLink>
        </div>
    }

    if(isLoading) {
        return <CircularProgress />
    }

  return (
    <Stack>
        <Tornado />
        <NavLink to={-1}>
            <ArrowBackIos/> Назад
        </NavLink>
        <Typography variant='h3'>
            {todo?.title}
        </Typography>

        <Typography variant='h4'>
            {todo?.description}
        </Typography>
    </Stack>
  )
}

export default Todo