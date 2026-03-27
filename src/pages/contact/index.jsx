import styles from './styles.module.css'
import {Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import SocialContact from '../../components/socialContact';
import { useState } from 'react';

function Contact(){
const [formData, setFormData] = useState([]);

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();

    const onSubmit = (data) => {
        setFormData((prev)=>[...prev, data]);
        reset();
    }

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

      <Box sx={{display: "flex",
        gap: "3vw",
        mt: "3vw"
      }}>

      <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap:" 2vw",
        width: "60%",
        "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    }
      }}
    >
        <Box sx={{display: "flex", 
            gap:"2vw",
            width:"100%",
            justifyContent: "center",
            alignItems: "center"
        }}>
      <TextField
        label="Ваш email"
        {...register("email", {
          required: "Введите email"
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
        sx={{width:"50%",
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
        sx={{width:"50%",
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
     
      <Button type="submit" variant="contained"
      sx={{fontSize: "1.2rem",
          border: "1px solid rgba(104, 102, 102, 0.5)",
          color: "black",
          marginLeft: "auto",
          minWidth: "30px",
          backgroundColor: "rgba(233, 233, 233, 0.5)",
          "&:hover":{
            backgroundColor: "black",
          color: "white"} 
        }}>
        Отправить
      </Button>
    </Box>


    <Box sx={{
      backgroundColor: "rgba(250, 250, 250, 1)",
      padding: "1vw 3vw 2vw 3vw",
      height: "220px",
      display: "flex",
      flexDirection: "column",
      gap: "1vw"
    }}>
     <p className={styles.textsocial}>Найдите нас:</p>
  
      <SocialContact />
    
    </Box>

    </Box>
      </Box>
    )
}

export default Contact;
