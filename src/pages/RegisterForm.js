import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
} from "@mui/material";
import TextField from "../components/register/components/TextField"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { useQuestionContext } from "../../context/ContextComponent";

import { Formik, Form } from "formik";

export const RegisterForm = () => {
  // const [user, setUser] = useState({
  //   first_name: "",
  //   last_name: "",
  //   password: "",
  //   password2: "",
  //   email: "",
  // });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const INITIAL_FORM_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  // FORM FIELDS VALIDATIONS
  const FORM_VALIDATION = Yup.object().shape({
    first_name: Yup.string().required("el nombre es requerido"),
    last_name: Yup.string().required("el apellido es requerido"),
    email: Yup.string().email("el email es invalido.").required("el email es requerido"),
    password: Yup
    .string()
    .required('La contraseña es requerida')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Debe contener al menos 8 caracteres, Una mayuscula, Una minuscula, Un numero y  Un caracter especial"
    ),
    password_confirmation: Yup.string().label('password_confirmation').required("La confirmacion de contraseña es requerida").oneOf([Yup.ref('password')], 'Las contraseñas no coninciden'),
  });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await fetch("http://localhost:4000/users", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(user),
  //     });
  //     await response.json();

  //     setLoading(false);
  //     navigate("/register");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  return (
    <Grid container>
      <Box  mx={"auto"} mt={12}>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Datos personales</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="first_name" label="Nombre" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField name="last_name" label="Apellido" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Email</Typography>
                    <TextField name="email" label="email" type="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Contraseña</Typography>
                    <TextField name="password" label="Ingrese contraseña" type="password" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Confirmar contraseña</Typography>
                    <TextField name="password_confirmation" label="Ingrese confirmacion de contraseña" type="password" />
                  </Grid>
                  <Grid item xs={12}>
                  <Button sx={{background:"#00897b"}}variant="contained" fullWidth="true" >Registrarse</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Container>
        </Grid>
      </Box>
    </Grid>
   
  );
};

