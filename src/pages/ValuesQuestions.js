import { Button, Typography, Box, Grid } from "@mui/material";
import { useQuestionContext } from "../context/QuestionsContext";
import { useAnswerContext } from "../context/AnswerConext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../assets/logos/blanco-verde_Mesa de trabajo 1.png";
export const ValuesQuestions = ({}) => {
  const { currentQuestion, setCurrentQuestion, setUserProfiler } =
    useQuestionContext();
  const { answersData, setAnswersData } = useAnswerContext();
  const answers = [
    { textoRespuesta: "Energias renovables", value: "CC" },
    { textoRespuesta: "Igualdad de genero", value: "SC" },
    { textoRespuesta: "Economia circular", value: "CC" },
    { textoRespuesta: "Luchas sociales", value: "SC" },
    { textoRespuesta: "Reciclaje", value: "CC" },
  ];
  const title = "cuales son tus valores personales?";
  // styles for the asnwers buttons
  const buttonStyles = {
    mt: "1%",
    mb: "1%",
    mr: "2%",
    ml: "2%",
    padding: "3%",
    fontSize: "1rem",
    textTransform: "none",
    background: "#00C9A7",
    color: "white",
    fontWeight: "bold",
    borderRadius: 8,
  };

  // answer click logic
  const handleSubmit = (e) => {

  };
  const onClick = (e) => {
    
  };
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
          paddingBottom: "2%",
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
        <Grid item mx={"auto"} mt={"1%"}>
          <Box sx={{ borderRadius: 3 }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ color: "white", fontWeight: "bold", mb:"10%" }}
            >
              {title}
            </Typography>
            {answers.map((answer, index) => (
              <Button
                key={index}
                value={answer.profileScore}
                name={answer.textoRespuesta}
                onClick={onClick}
                sx={buttonStyles}
                variant="contained"
              >
                {answer.textoRespuesta}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid
          container
          sx={{
            mt: "3%",
          }}
        >
          <Grid item lg={6} md={6} xs={6} mt={5}>
            <Box display="flex" justifyContent="flex-start">
              <Button
                sx={{
                  background: "#FFFFFF",
                  color: "#12192c",
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
          <Grid item lg={6} md={6} xs={6} mt={5}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                onSubmit={handleSubmit}
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
      </Box>
    </Grid>
  );
};
