import { Person } from "@mui/icons-material";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUser } from "../../lib/userSlice";

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
    const navItems = user ? loggedItems : unLoggedItems

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