import { Stack, Typography } from '@mui/material'
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import React from 'react'
import { NavLink } from 'react-router-dom';

function ErrorElement() {
  return (
    <Stack sx={{marginTop: "150px"}} alignItems="center">
        <NotInterestedIcon color='error' sx={{width: "50px", height: "50px"}} />
        <Typography variant='h3'>Произошла ошибка</Typography>
        <Typography >Работаем над ее устранением</Typography>
        <NavLink to={"/login"}>Вернуться на главную</NavLink>
    </Stack>
  )
}

export default ErrorElement