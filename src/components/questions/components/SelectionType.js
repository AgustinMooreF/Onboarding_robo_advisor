import {
    Button,
    Card,
    Typography,
    CardActions,
    CardContent,
    CardActionArea
  } from "@mui/material";
import { useState } from "react";
import { useQuestionContext } from "../../../context/QuestionsContext";
import { useDataContext } from "../../../context/UserDataContext";
const responseValue = [];
const responseName = [];
export const SelectionType = ({
        title,
        answers,
        ...props
    }) => {
    console.log(answers)
    const {currentQuestion, setCurrentQuestion, setUserProfiler} = useQuestionContext();
    const {profileData, setData, answersData, setAnswersData,} = useDataContext();
    
    const handleSubmit = (e) => { 
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < answers.length) {
        responseName.push(e.target.name);
        responseValue.push(e.target.value);
        setCurrentQuestion(nextQuestion);
      } else {
        responseName.push(e.target.name);
        responseValue.push(e.target.value);
        setAnswersData({respValue: responseValue, respName: responseName});
        setUserProfiler(true);
      }
    }
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            {answers.map((answer) => (
              <Button
                onClick={handleSubmit}
                sx={{ mt: 1.5 }}
                variant="contained"
                fullWidth={true}
                value={answer.profileScore}
                name={answer.textoRespuesta}
              >
                {answer.textoRespuesta}
              </Button>
            ))}
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    );
}