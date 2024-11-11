import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../lib/userSlice'
import { Navigate, Outlet } from 'react-router-dom'

function Redirector() {
    const user = useSelector(selectUser)

    if(!user){
        return <Navigate to="/login" />
    }

    return (
        <Outlet />
    )
}

export default Redirector