import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <Stack sx={{marginTop: "150px"}} alignItems="center">
        <CloseIcon color='secondary' sx={{width: "150px", height: "150px"}} />
        <Typography variant='h3'>Страница не найдена</Typography>
        <NavLink to={"/login"}>Вернуться на главную</NavLink>
    </Stack>
  )
}

export default NotFound