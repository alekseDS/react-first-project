import {useState} from 'react' 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Stack from '@mui/material/Stack';
import SignUpForm from './components/SignUpForm';

function App() {
  const [user, setUser] = useState()

  return (
      <Stack alignItems={"center"}>
        {
          user
            ? <div>{user.name}</div>
            : <SignUpForm setUser={setUser}/>
        }
      </Stack>
  )
}

export default App
