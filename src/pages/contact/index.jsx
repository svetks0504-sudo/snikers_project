import styles from './styles.module.css'
import {Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';

function Contact(){
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    return(
        <Box sx={{ padding: "3vw 13vw" }}>
        <Box >
      <h1>Контакты</h1>
      <hr className={styles.lineTop} />
      </Box>
      <ul>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>

      <Box
      component="form"
      onSubmit={handleSubmit()}
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        width: "40vw",
        mt: "3vw"
      }}
    >
        <Box sx={{display: "flex", 
            gap:"2vw",
            width:"100%",
        }}>
      <TextField
        label="Ваш email"
        {...register("email", {
          required: "Введите email"
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{width:"100%",
        backgroundColor: "rgba(250, 250, 250, 1)",
        }}
      />
      <TextField
        label="Ваше имя"
        {...register("name", {
          required: "Введите имя"
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
        sx={{width:"100%",
        backgroundColor: "rgba(250, 250, 250, 1)",
        }}
      />
      </Box>
      <TextField
        label="Введите сообщение"
        multiline
        rows={4}
        {...register("message", {
          required: "Введите сообщение"
        })}
        error={!!errors.message}
        helperText={errors.message?.message}
        sx={{width:"100%",
        backgroundColor: "rgba(250, 250, 250, 1)",
        }}
      />
      <Button type="submit" variant="contained">
        Отправить
      </Button>
    </Box>

      </Box>
    )
}

export default Contact;

/*

    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
      </div>
    </Box>
  );
}*/