import { useContext, useState, createContext, useEffect } from "react"
const userDataContext = createContext()

export const useDataContext = () => {
    const context = useContext(userDataContext);
    if (!context) throw new Error("Post Provider is missing");
    return context;
}

export const UserDataContext = ({ children }) => {
    const [profileData, setData]= useState({
        first_name: "",
        last_name: "",
        gender:"",
        email: "",
        password: "",
        score: 0,
        risk_profile: "",
    });
    const [answersData, setAnswersData] = useState({})

    return (
            <userDataContext.Provider value = {{
                profileData,
                setData,
                answersData,
                setAnswersData,
            }}>
                {children}
            </userDataContext.Provider>
    )
}