import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
    <NavLink style={{ color: '#fff' }} to="login" >login</NavLink>,
    <NavLink style={{ color: '#fff' }} to="register" >register</NavLink>,
    <NavLink style={{ color: '#fff' }} to="about" >about</NavLink>
]

function Layout() {
  return (
    <>
    <AppBar component="nav">
        <Toolbar>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
        >
            Todo-list
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