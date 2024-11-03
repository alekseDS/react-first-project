import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';

function AddTodo(props) {
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const handChangeTitle = (e)=>{
        setTitle(e.target.value)
    }

    const handChangeDesc = (e)=>{
        setDesc(e.target.value)
    }

    const handleAddTodo = ()=>{
        props.addTodo(title, description)
        reset()
    }

    const reset = ()=>{
        setTitle('')
        setDesc('')
    }

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          Добавление нового дела
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            <TextField size='small' label='Заголовок' value={title} onChange={handChangeTitle} />
            <TextField size='small' label='Описание' value={description} onChange={handChangeDesc}/>
          </Stack>
        </AccordionDetails>
        <AccordionActions>
          <Button onClick={reset}>Сбросить</Button>
          <Button onClick={handleAddTodo}>Добавить</Button>
        </AccordionActions>
      </Accordion>
  )
}

export default AddTodo