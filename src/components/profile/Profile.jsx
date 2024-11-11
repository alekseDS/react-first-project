import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setUser } from '../../lib/userSlice'
import { NavLink } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Button, Stack } from '@mui/material'

function Profile() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        localStorage.removeItem('token')
        dispatch(setUser(null))
    }
    return (
        <Stack direction={"row"} alignItems={"center"}>
            <NavLink to={-1}>
                <ArrowBack />
            </NavLink>
            {user.username}
            <Button onClick={logoutHandler}>
                Logout
            </Button>
        </Stack>
    )
}

export default Profile