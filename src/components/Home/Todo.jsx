import axios from 'axios'
import React from 'react'
import { store } from '../../lib/store'
import { Stack, Typography } from '@mui/material'
import { ArrowBackIos, Tornado } from '@mui/icons-material'
import { NavLink, useLoaderData } from 'react-router-dom'

export async function todoLoader({params}) {
    const id = params.id
    const user = store.getState().userSlice.user

    try {
        const response = await axios.get('https://todos-be.vercel.app/todos/'+id,{
            headers: {
                "Authorization": `Bearer ${user?.access_token}`
            }
        })
        return response.data

    } catch (e) {
        console.error(e)
    }
}

function Todo() {
    const todo = useLoaderData()
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