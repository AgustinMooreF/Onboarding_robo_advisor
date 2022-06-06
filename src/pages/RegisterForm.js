import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Grid, Box, Container, Typography } from "@mui/material";
import TextField from "../components/register/components/TextField";
import logo from "../assets/logos/blanco-verde_Mesa de trabajo 1.png";
import { Formik, Form } from "formik";

export const RegisterForm = () => {
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
    email: Yup.string()
      .email("el email es invalido.")
      .required("el email es requerido"),
    // password: Yup
    // .string()
    // .required('La contraseña es requerida')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //   "Debe contener al menos 8 caracteres, Una mayuscula, Una minuscula, Un numero y  Un caracter especial"
    // ),
    // password_confirmation: Yup.string().label('password_confirmation').required("La confirmacion de contraseña es requerida").oneOf([Yup.ref('password')], 'Las contraseñas no coninciden'),
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

  return (
    <Grid container>
      <Box
        mx={"auto"}
        mt={4}
        sx={{
          borderRadius: 3,
          background: "red",
          height: "100%",
          background: "#12192c",
          width: "30vw",
          paddingX: "5%",
          paddingBottom: "5%",
          color: "white",
        }}
      >
        <Grid container mx={"auto"}>
          <Box mx={"auto"} sx={{ width: 150 }}>
            <Box
              component="img"
              mx={"auto"}
              sx={{
                mx: "auto",
                height: 150,
                width: 150,
                maxHeight: { xs: 150, md: 150 },
                maxWidth: { xs: 250, md: 250 },
              }}
              alt="Griin inversiones sustentables"
              src={logo}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Grid container>
        <Typography gutterBottom  variant="h4" component="div" sx={{color:"white", fontWeight:"bold", mx: "auto", mb:"5%"}}>Informacion de registro</Typography>
        </Grid>
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
                  <Grid item xs={6}>
                    <Typography>Nombre</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Apellidos</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="first_name"
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      name="last_name"
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Email</Typography>
                    <TextField
                      name="email"
                      type="email"
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Contraseña</Typography>
                    <TextField
                      name="password"
                      type="password"
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Confirmar contraseña</Typography>
                    <TextField
                      name="password_confirmation"
                      type="password"
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      sx={{
                        width:"100%",
                        background: "#00C9A7",
                        pt: "3%",
                        pb: "3%",
                        pr: "6%",
                        pl: "6%",
                        mt: "5%"
                      }}
                      variant="contained"
                     
                      type="submit"
                    >
                      Registrarse
                    </Button>
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
