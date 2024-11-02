import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [data, setData] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = ()=>{
    setIsLoginForm(true)
  }

  const handleRegister = ()=>{
    setIsLoginForm(false)
  }

  const handleChangeLogin = (e)=>{
    setData(e.target.value)
  }

  const handleChangePass = (e)=>{
    setPass(e.target.value)
  }

  return (
      <Stack alignItems={"center"}>
        {
        isLoginForm 
        ? <Stack width={"350px"} gap={2}>  
          <Typography variant="h3" gutterBottom>
            Вход в сервис
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Нет учетной записи?
          </Typography>
          <Button variant="text" onClick={handleRegister}>Зарегестрироваться</Button>
          <TextField id="login" label="Login" variant="standard" onChange={handleChangeLogin} value={data} />
          <TextField id="password" label="Password" variant="standard" type="password" onChange={handleChangePass} value={pass} />
          <Button variant="contained" >Войти</Button>
        </Stack>
        : <Stack width={"350px"} gap={2}>  
          <Typography variant="h3" gutterBottom>
            Регстрация в сервисе
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Есть учетка?
          </Typography>
          <Button variant="text" onClick={handleLogin}>Войти</Button>
          <TextField id="login" label="Login" variant="standard" onChange={handleChangeLogin} value={data} />
          <TextField id="password" label="Password" variant="standard" type="password" onChange={handleChangePass} value={pass} />
          <Button variant="contained" >Регстрация</Button>
        </Stack>
        }
      </Stack>
  )
}

export default App
