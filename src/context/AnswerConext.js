import { useContext, useState, createContext } from "react"
const answerContext = createContext()

export const useAnswerContext = () => {
    const context = useContext(answerContext);
    if (!context) throw new Error("Post Provider is missing");
    return context;
}
export const AnswerContext = ({ children }) => {
    const [answersData, setAnswersData] = useState([])

    return (
            <answerContext.Provider value = {{
                answersData,
                setAnswersData,
            }}>
                {children}
            </answerContext.Provider>
    )
}