import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../lib/userSlice';

function RegisterForm() {
  const [data, setData] = useState('')
  const [pass, setPass] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeLogin = (e)=>{
    setData(e.target.value)
  }

  const handleChangePass = (e)=>{
    setPass(e.target.value)
  }

  const handleRegisterClick = async ()=>{
    try{
        setIsLoading(true)
        const response = await axios.post('https://todos-be.vercel.app/auth/register', {
            "username": data,
            "password": pass
          })

          if(response.status === 201 && response.data.username){
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
              navigate("/")
          } 
        } 
    }
    catch(e){
        enqueueSnackbar(e.response?.data?.message || "Неверные данные или ошибка сервера", {
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
            Регистрация в сервисе
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Есть учетка?
            <NavLink to="/login">Войти</NavLink>
          </Typography>
          <TextField id="login" label="Login" variant="standard" onChange={handleChangeLogin} value={data} />
          <TextField id="password" label="Password" variant="standard" type="password" onChange={handleChangePass} value={pass} />
          <Button disabled={isLoading || !data || !pass} variant="contained" onClick={handleRegisterClick} >Регстрация</Button>
        </Stack>
  )
}

export default RegisterForm
