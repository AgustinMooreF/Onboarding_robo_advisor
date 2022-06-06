import { useContext, useState, createContext } from "react"
const questionContext = createContext()

export const useQuestionContext = () => {
    const context = useContext(questionContext);
    if (!context) throw new Error("Post Provider is missing");
    return context;
}

export const QuestionsContext = ({ children }) => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userProfiler, setUserProfiler] = useState(false)
    // const getQuestions = () => {
    //     const resp = preguntas;
    //     setQuestions(resp);
    //     console.log(resp)
    // }
    return (
            <questionContext.Provider value = {{

                questions,
                // getQuestions,
                setQuestions,
                currentQuestion,
                setCurrentQuestion,
                userProfiler,
                setUserProfiler
            }}>
                {children}
            </questionContext.Provider>
    )
}