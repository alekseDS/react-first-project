import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { useSnackbar } from 'notistack'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../lib/userSlice';

function LoginForm(props) {
  const [data, setData] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const handleChangeLogin = (e)=>{
    setData(e.target.value)
  }

  const handleChangePass = (e)=>{
    setPass(e.target.value)
  }

  const handleLoginClick = async ()=>{
    try{
        setIsLoading(true)
        const response = await axios.post('https://todos-be.vercel.app/auth/login', {
            "username": data,
            "password": pass
          })

          if(response.status === 200 && response.data.username){
            const setUserAction = setUser(response.data)
            dispatch(setUserAction)
            enqueueSnackbar("Добро пожаловать, "+response.data.username, {
                variant: "success"
            })
        } 
    }
    catch(e){
        enqueueSnackbar('Неверные данные или ошибка сервера', {
            variant: 'error'
        })
    }
    finally {
        setIsLoading(false)
    }
  }
  

  return (
        <Stack width={"350px"} gap={2}>  
          <Typography variant="h3" gutterBottom>
            Вход в сервис
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Нет учетной записи?
            <NavLink to="/register">Зарегестрироваться</NavLink>
          </Typography>
          <TextField id="login" label="Login" variant="standard" onChange={handleChangeLogin} value={data} />
          <TextField id="password" label="Password" variant="standard" type="password" onChange={handleChangePass} value={pass} />
          <Button disabled={isLoading || !data || !pass} onClick={handleLoginClick} variant="contained" >Войти</Button>
        </Stack>
  )
}

export default LoginForm
