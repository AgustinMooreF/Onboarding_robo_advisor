import {RegisterForm} from "./pages/RegisterForm";
import { QuestionsContext } from "./context/QuestionsContext";
import Menu from "./components/sections/Navbar";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { QuestionMainComponent } from "./pages/QuestionsMainComponent";
import {UserDataContext} from "./context/UserDataContext"
function App() {
  return (
    <BrowserRouter>
        <Menu />
    <QuestionsContext>
      <UserDataContext>
              <Routes>
                <Route index path="/" element={<QuestionMainComponent />} />
                <Route path="/question" element={<QuestionMainComponent />}/>
                <Route path="/register" element={<RegisterForm />}/>
              </Routes>
      </UserDataContext>
    </QuestionsContext>
      </BrowserRouter>
  );
}

export default App;
