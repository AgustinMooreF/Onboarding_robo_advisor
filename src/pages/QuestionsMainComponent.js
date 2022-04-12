import { SelectionType } from "../components/questions/components/SelectionType";
import { Button, Grid, Box, Container, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect } from "react";
import { useQuestionContext } from "../context/QuestionsContext";
import { useDataContext } from "../context/UserDataContext";
import { RegisterForm } from "./RegisterForm";
import preguntas from "../questionJson";
import { useNavigate } from "react-router-dom";

export const QuestionMainComponent = () => {
  const {currentQuestion, userProfiler} = useQuestionContext();
  const {profileData, setData, answersData, setAnswersData,} = useDataContext();
  let navigate = useNavigate();
// useEffect(() => {

// },[])
if(userProfiler){
  navigate("/register")
}
const questions = preguntas;
  return (
    <Grid container>
      <Box mx={"auto"} mt={12}>
        <Button variant="contained" endIcon={<ArrowBackIosNewIcon />}></Button>
        <Grid item xs={12}>
          <Container maxWidth="md">
              {
                <SelectionType answers={questions[currentQuestion].respuestas} title={questions[currentQuestion].titulo}/>
              }

          </Container>
        </Grid>
      </Box>
    </Grid>
  );
};
