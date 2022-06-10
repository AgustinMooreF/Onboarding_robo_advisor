import {
    Button,
    Typography,
    Box
  } from "@mui/material";
import { useQuestionContext } from "../../../context/QuestionsContext";
import { useAnswerContext } from "../../../context/AnswerConext";

export const SelectionType = ({
        title,
        answers,
        length,
        ...props
    }) => {
    const {currentQuestion, setCurrentQuestion, setUserProfiler} = useQuestionContext();
    const {answersData, setAnswersData,} = useAnswerContext();

    // styles for the asnwers buttons
    const buttonStyles = {
      mt: 1,
      padding:"3%",
      fontSize: "1rem",
      textTransform: "none",
      background: "#00C9A7",
      color: "white",
      fontWeight:"bold"
    };

    // answer click logic
    const handleSubmit = (e) => { 
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < length) {  
        //if the questions is already answer we copy de state for to a new one with the new answer and set the new state to the context api
        if(answersData[currentQuestion]){
          let updatedState = answersData;
          console.log(updatedState)
          updatedState[currentQuestion] = {currentQuestion: e.target.name, response: e.target.value}
          console.log(updatedState)
          setAnswersData(updatedState)
          setCurrentQuestion(nextQuestion);
        }
        else{
          setAnswersData([...answersData, {currentQuestion: e.target.name, response: e.target.value} ])
          setCurrentQuestion(nextQuestion);
        }
      } 
      else {
        // responseName.push(e.target.name);
        // responseValue.push(parseInt(e.target.value));
        setAnswersData([...answersData, {currentQuestion: e.target.name, response: e.target.value} ]);
        setUserProfiler(true);
      }
    }
    return (
      <Box sx={{  borderRadius:3 }}>
            <Typography gutterBottom variant="h4" component="div" sx={{color:"white", fontWeight:"bold"}}>
              {title}
            </Typography>
            {answers.map((answer, index) => (
              <Button
              key={index}
              value={answer.profileScore}
              name={answer.textoRespuesta}
              onClick={handleSubmit}
              sx={buttonStyles}
              fullWidth={true}
              variant="contained"
              >
                {answer.textoRespuesta}
              </Button>
            ))} 
      </Box>
    );
}