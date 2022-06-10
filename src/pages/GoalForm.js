import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button, Grid, Box, Container, Typography } from "@mui/material";
import TextField from "../components/register/components/TextField";
import { Formik, Form } from "formik";
import Slider from "@mui/material/Slider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch } from "react-redux";
import { userActions } from "../store/slices/UserSlice";
import { fetchRecomendedPortfolio } from "../store/actions/RecomendationActions";
import logo from "../assets/logos/blanco-verde_Mesa de trabajo 1.png";

export const GoalForm = () => {
  const disptach = useDispatch();
  // const [loading, setLoading] = useState(false);
  const [slider, setSlider] = useState(1);
  const navigate = useNavigate();

  const INITIAL_FORM_STATE = {
    title: "Mi primera inversion ESG",
    duration: 1,
    amount: 0,
  };

  // FORM FIELDS VALIDATIONS
  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().required("El titulo es requerido"),
    amount: Yup.string().required("El monto es requerido"),
    duration: Yup.string().required("La duracion es requerida"),
  });

  const handleSliderChange = (e, newValue) => {
    setSlider(newValue);
  };

  return (
    <Grid container>
      <Box mx={"auto"} mt={12}>
        <Grid
          mx={"auto"}
          item
          xs={12}
          sx={{
            borderRadius: 3,
            height: "100%",
            background: "#12192c",
            width: "30vw",
            paddingX: "5%",
            paddingBottom: "7%",
            color: "white",
          }}
        >
          <Container>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  disptach(
                    userActions.replaceGoalBasicData({
                      amount: values.amount,
                      title: values.title,
                      duration: slider,
                    })
                  );
                  disptach(fetchRecomendedPortfolio());
                  navigate("/recomendation");
                }, 20);
              }}
            >
              <Form>
                <Grid container spacing={2} alignItems="center">
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
                    <Typography gutterBottom variant="h6" component="div">
                      Titulo de tu primera meta:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="title"
                      label=""
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="h6" component="div">
                      Cuanto quieres invertir:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      name="amount"
                      label=""
                      type="number"
                      inputProps={{
                        style: { background: "#393f55", color: "white" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="h6" component="div">
                      Cuanto tiempo quieres invertir:
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={2}>
                    <TextField name="duration" label="" value={slider} />
                  </Grid> */}
                  <Grid item xs={8}>
                    <Slider
                      name="duration"
                      defaultValue={1}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      onChange={handleSliderChange}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={6} mt={5}>
                    <Box display="flex" justifyContent="flex-start">
                      <Button
                        sx={{
                          background: "#FFFFFF",
                          color:"#12192c",
                          pt: "3%",
                          pb: "3%",
                          pr: "6%",
                          pl: "6%",
                        }}
                        variant="contained"
                        startIcon={<ArrowBackIosNewIcon />}
                      >
                        {" "}
                        Anterior
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={6} mt={5}>
                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        type="submit"
                        sx={{
                          background: "#00C9A7",
                          pt: "3%",
                          pb: "3%",
                          pr: "8%",
                          pl: "8%",
                        }}
                        variant="contained"
                      >
                        Continuar
                      </Button>
                    </Box>
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
