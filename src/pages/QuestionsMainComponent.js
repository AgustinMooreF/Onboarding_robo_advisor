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
  //because array start at 0 so currentquestion is one less
  const questionsLength = preguntas.length - 1;
// useEffect(() => {

// },[])
const userProfileScore = () => {
  let userScore = 0;
  console.log("current question len ", questionsLength ,"cuurent question ",currentQuestion)
  if(answersData.respValue){
    if(questionsLength === currentQuestion){
      answersData.respValue.forEach(value => {
        userScore += value;
        console.log(value, userScore)
      });
      return userScore;
    }
  }
  else{
    throw new Error("Values from responses missing in userDataProvider");
  }
}

const setUserProfile = () => {
  const userScore = userProfileScore();
  console.log(userScore)
  if(userScore > 4 && userScore <= 6){
    setData((profileData)=>({...profileData, score: userScore, risk_profile:"conservador"}));
  }
  else if(userScore > 6 && userScore <= 11){
    setData((profileData)=>({...profileData, score: userScore, risk_profile:"moderado"}));
  }
  else if(userScore > 11){
    setData((profileData)=>({...profileData, score: userScore, risk_profile:"arriesgado"}));
    // setData({...profileData, score: userScore, risk_profile:"arriesgado"});
  }
}

if(userProfiler){
  setUserProfile();
  navigate("/register")
}


const questions = preguntas;
  return (
    <Grid container>
      <Box mx={"auto"} mt={12}>
        <Grid item xs={12}>
          <Container maxWidth="md">
              {
                <SelectionType answers={questions[currentQuestion].respuestas} title={questions[currentQuestion].titulo} length={preguntas.length}/>
              }

            <Box mt={6}>
                  <Button sx={{background:"#969696", pt:"2%", pb:"2%", pr:"5%", pl:"5%"}} variant="contained" startIcon={<ArrowBackIosNewIcon/> } > Anterior</Button>
            </Box>
          </Container>
        </Grid>
      </Box>
    </Grid>
  );
};
