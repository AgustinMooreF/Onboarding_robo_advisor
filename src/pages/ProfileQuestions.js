import { SelectionType } from "../components/questions/components/SelectionType";
import { Button, Grid, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useQuestionContext } from "../context/QuestionsContext";
import { useAnswerContext } from "../context/AnswerConext";
import preguntas from "../questionJson";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/slices/UserSlice";
import logo from "../assets/logos/blanco-verde_Mesa de trabajo 1.png";
import { useEffect, useState } from "react";

export const ProfileQuestions = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentQuestion, setCurrentQuestion, userProfiler } =
    useQuestionContext();
  const { answersData } = useAnswerContext();
  // eslint-disable-next-line no-unused-vars
  const [profileUser, setProfileUser] = useState(false);
  //because array start at 0 and questions.length count the total, so its 1 more
  const questionsLength = preguntas.length - 1;
  const userProfileScore = () => {
    let userScore = 0;
    if (answersData.length > 0) {
      if (questionsLength === currentQuestion) {
        answersData.forEach((answer) => {
          userScore += parseInt(answer.response);
          console.log(answer.response, userScore);
        });
        return userScore;
      }
    } else {
      throw new Error("Values from responses missing in userDataProvider");
    }
  };

  const setUserProfile = () => {
    const userScore = userProfileScore();
    console.log(userScore);
    if (userScore > 4 && userScore <= 6) {
      dispatch(
        userActions.replaceProfileData({
          score: userScore,
          risk_profile: "Conservador",
        })
      );
    } else if (userScore > 6 && userScore <= 11) {
      dispatch(
        userActions.replaceProfileData({
          score: userScore,
          risk_profile: "Moderado",
        })
      );
    } else if (userScore > 11) {
      dispatch(
        userActions.replaceProfileData({
          score: userScore,
          risk_profile: "Arriesgado",
        })
      );
    }
  };

  
  useEffect(() => {
    if (userProfiler) {
      setProfileUser(true)
      dispatch(userActions.nextStep());
      setUserProfile();
      navigate("/personal_Values");
    }
  }, [userProfiler])
  

  const questions = preguntas;
  return (
    <Grid container>
      <Box
        mx={"auto"}
        mt={4}
        sx={{
          borderRadius: 3,
          height: "100%",
          background: "#12192c",
          width: "30vw",
          paddingX: "5%",
          paddingBottom: "2%",
        }}
      >

        <Grid container  mx={"auto"}>
          <Box mx={"auto"} sx={{width:150}}>
          <Box
            component="img"
            mx={"auto"}
            sx={{
              mx:"auto",
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
        <Grid
          item
          mx={"auto"}
          my={"auto"}
        >
          {/* <img  src={logo} alt="logo" style={{Width: 80, height: 80, margin:"auto"}}/> */}

          {
            <SelectionType
              length={preguntas.length}
              title={questions[currentQuestion].titulo}
              answers={questions[currentQuestion].respuestas}
            />
          }
        </Grid>
          <Button
            disabled={currentQuestion === 0}
            onClick={() => {
              setCurrentQuestion((currentQuestion) => currentQuestion - 1);
            }}
            sx={{
              background: "#00C9A7",
              pt: "2%",
              pb: "2%",
              pr: "5%",
              pl: "5%",
              mt: "15%"
            }}
            variant="contained"
            startIcon={<ArrowBackIosNewIcon />}
          >
            {" "}
            Anterior
          </Button>
      </Box>
    </Grid>
  );
};
