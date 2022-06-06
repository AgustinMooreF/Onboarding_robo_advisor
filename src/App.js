import {RegisterForm} from "./pages/RegisterForm";
import { QuestionsContext } from "./context/QuestionsContext";
import { GoalForm } from "./pages/GoalForm";
import { Box } from "@mui/material";
import {RecomendationView} from "./pages/RecomendationView"
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { QuestionMainComponent } from "./pages/QuestionsMainComponent";
import {AnswerContext} from "./context/AnswerConext"
import { useEffect } from "react";
import { fetchAllPortfolios } from "./store/actions/RecomendationActions";
import { useDispatch } from "react-redux";
import { ThanksPageView } from "./pages/ThanksPage";
import { HorizontalLinearStepper } from "./components/stepper/stepper";
import { ValuesQuestions } from "./pages/ValuesQuestions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPortfolios());
  }, [])
  
  return (
    <BrowserRouter>
    <Box mx={"auto"} sx={{width: "50%", pt:"3%"}}>
        <HorizontalLinearStepper></HorizontalLinearStepper>
    </Box>
    <QuestionsContext>
      <AnswerContext>
              <Routes>
                <Route index path="/" element={<QuestionMainComponent />} />
                <Route path="/question" element={<QuestionMainComponent />}/>
                <Route path="/goalInfo" element={<GoalForm />}/>
                <Route path="/recomendation" element={<RecomendationView />}/>
                <Route path="/register" element={<RegisterForm />}/>
                <Route path="/redirect" element={<ThanksPageView />}/>
                <Route path="/personal_values" element={<ValuesQuestions />}/>
              </Routes>
      </AnswerContext>
    </QuestionsContext>
      </BrowserRouter>
  );
}

export default App;
