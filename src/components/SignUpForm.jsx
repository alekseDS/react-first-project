import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function SignUpForm() {
  const [isLoginForm, setIsLoginForm] = useState(true)

  const handleLogin = ()=>{
    setIsLoginForm(true)
  }

  const handleRegister = ()=>{
    setIsLoginForm(false)
  }
  

  return (
        isLoginForm 
        ? <LoginForm handleRegister={handleRegister}/>
        : <RegisterForm handleLogin={handleLogin}/>
  )
}

export default SignUpForm
