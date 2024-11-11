import { Person } from "@mui/icons-material";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUser, setUser } from "../../lib/userSlice";
import { jwtDecode } from 'jwt-decode'
import { isFuture } from 'date-fns'

const unLoggedItems = [
    <NavLink style={{ color: '#fff' }} to="login" >login</NavLink>,
    <NavLink style={{ color: '#fff' }} to="register" >register</NavLink>,
    <NavLink style={{ color: '#fff' }} to="about" >about</NavLink>
]
const loggedItems = [
    <NavLink style={{ color: '#fff' }} to="about" >about</NavLink>,
    <NavLink style={{ color: '#fff' }} to="profile" >
        <Person />
    </NavLink>
]

function Layout() {
    const user = useSelector(selectUser)
    const tokenFromStorage = localStorage.getItem('token')
    const navItems = user ? loggedItems : unLoggedItems
    const dispatch = useDispatch()

    if(!user && tokenFromStorage){
        const {exp, username} = jwtDecode(tokenFromStorage)
        if(isFuture(exp*1000)){
            dispatch(setUser({username, access_token: tokenFromStorage}))
        } else {
            localStorage.removeItem('token')
        }
        return null
    }

    return (
        <>
        <AppBar component="nav">
            <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
            >
                <NavLink to="/" style={{ color: '#fff' }} >Todo-list</NavLink>
            </Typography>
            <Box>
                {navItems.map((item, index) => (
                <Button size="small" key={index}>
                    {item}
                </Button>
                ))}
            </Box>
            </Toolbar>
        </AppBar>

        <Stack sx={{marginTop: "80px"}} alignItems={"center"}>
            <Outlet />
        </Stack>
        </>
    )
}

export default Layout