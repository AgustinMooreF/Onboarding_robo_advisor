import React, { useState } from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import logo from "../assets/logos/blanco-verde_Mesa de trabajo 1.png";
import image1 from "../assets/images/thanksSus.png";
export const ThanksPageView = () => {
  return (
    <Grid container>
      <Box mx={"auto"} mt={12}>
        <Grid
          mx={"auto"}
          item
          xs={12}
          sx={{
            borderRadius: 3,
            background: "red",
            height: "100%",
            background: "#12192c",
            width: "30vw",
            paddingX: "5%",
            paddingBottom: "7%",
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
          <Box mx={"auto"}>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              ¡Gracias por confiar en Griin!
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Estas a un paso de invertir en el futuro de todos.
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Te llegara un mail de confirmación para que puedas activar tu
              cuenta, luego podrás entrar a la plataforma para comenzar tu viaje
              con Griin.
            </Typography>
          </Box>

          <Grid container mx={"auto"}>
            <Box mx={"auto"} sx={{ mt: "2%" }}>
              <Box
                component="img"
                mx={"auto"}
                sx={{
                  mx: "auto",
                  height: 250,
                  width: 350,
                }}
                alt="Griin inversiones sustentables"
                src={image1}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
