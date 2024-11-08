import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../lib/userSlice'
import { NavLink } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { Stack } from '@mui/material'

function Profile() {
    const user = useSelector(selectUser)
    return (
        <Stack direction={"row"} alignItems={"center"}>
            <NavLink to={-1}>
                <ArrowBack />
            </NavLink>
            {user.username}
        </Stack>
    )
}

export default Profile