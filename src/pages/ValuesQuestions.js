import { Button, Typography, Box, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../assets/logos/blanco-verde_Mesa de trabajo 1.png";
import {  useState } from "react";
import { PersonalValuesButton } from "../components/questions/components/PersonalValuesButton";
import { useDispatch } from "react-redux";
import { userActions } from "../store/slices/UserSlice";
import { useNavigate } from "react-router-dom";
export const ValuesQuestions = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [personalValues, setPersonalValues] = useState([]);
  const answers = [
    { textoRespuesta: "Energias renovables", value: "CC" },
    { textoRespuesta: "Igualdad de genero", value: "SC" },
    { textoRespuesta: "Economia circular", value: "CC" },
    { textoRespuesta: "Luchas sociales", value: "SC" },
    { textoRespuesta: "Reciclaje", value: "CC" },
  ];
  const title = "cuales son tus valores personales?";

  // useEffect(() => {
  //   console.log(personalValues)
  // }, [personalValues])
  

  // answer click logic
  const handleSubmit = (e) => {
    console.log(typeof(personalValues))
    dispatch(userActions.userValues({values: personalValues}));
    navigate("/goalInfo");
  };
  return (
    <Grid container>
      <Box
        mx={"auto"}
        mt={6}
        sx={{
          borderRadius: 3,
          height: "100%",
          background: "#12192c",
          width: "30vw",
          paddingX: "5%",
          paddingBottom: "2%",
        }}
      >
        <Grid container mx={"auto"}>
          <Box mx={"auto"} sx={{ width: 150 }}>
            <Box
              component="img"
              mx={"auto"}
              sx={{
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
        <Grid item mx={"auto"} mt={"1%"}>
          <Box sx={{ borderRadius: 3 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "white", fontWeight: "bold", mb:"8%" }}
            >
              {title}
            </Typography>
            {/* map de preguntas */}
            {answers.map((answer, index) => (
              <PersonalValuesButton
              key={index}
                answer={answer}
                setPersonalValues={setPersonalValues}
                personalValues={personalValues}
              >
                {answer.textoRespuesta}
              </PersonalValuesButton>
            ))}
          </Box>
        </Grid>
        <Grid
          container
         mt={"4%"}
        >
          <Grid item lg={6} md={6} xs={6} mt={5}>
            <Box display="flex" justifyContent="flex-start">
              <Button
                sx={{
                  background: "#FFFFFF",
                  color: "#12192c",
                  pt: "5%",
                  pb: "5%",
                  pr: "10%",
                  pl: "10%",
                }}
                variant="contained"
                startIcon={<ArrowBackIosNewIcon />}
              >
                {" "}
                Anterior
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} xs={6} mt={5}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                onClick={handleSubmit}
                sx={{
                  background: "#00C9A7",
                  pt: "5%",
                  pb: "5%",
                  pr: "10%",
                  pl: "10%",
                }}
                variant="contained"
              >
                Continuar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
