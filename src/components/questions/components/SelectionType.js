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
        length,
        ...props
    }) => {
    console.log(answers)
    const {currentQuestion, setCurrentQuestion, setUserProfiler} = useQuestionContext();
    const {profileData, setData, answersData, setAnswersData,} = useDataContext();

    // styles for the asnwers buttons
    const buttonStyles = {
      mt: 1,
      padding:"3%",
      fontSize: "1rem",
      textTransform: "none",
      background: "#00897b ",
    };

    // answer click logic
    const handleSubmit = (e) => { 
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < length) {
        responseName.push(e.target.name);
        responseValue.push(parseInt(e.target.value));
        setCurrentQuestion(nextQuestion);
      } else {
        responseName.push(e.target.name);
        responseValue.push(parseInt(e.target.value));
        setAnswersData({respValue: responseValue, respName: responseName});
        setUserProfiler(true);
      }
    }
    return (
      <Card sx={{ maxWidth: 600, background:"#363636", borderRadius:3, boxShadow:"3", padding:"2%"}}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
              {title}
            </Typography>
            {answers.map((answer) => (
              <Button
                onClick={handleSubmit}
                sx={buttonStyles}
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