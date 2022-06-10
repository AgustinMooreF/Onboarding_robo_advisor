import {
    Button,
  } from "@mui/material";
import { useState } from "react";
export const PersonalValuesButton = ({
        answer,
        setPersonalValues,
        personalValues
    }) => {
    const [clicked, setClicked] = useState(false);
    // styles for the asnwers buttons
    const buttonStyles = {
      mt: "3%",
      mb: "1%",
      mr: "2%",
      ml: "2%",
      padding: "3%",
      fontSize: "1rem",
      textTransform: "none",
      background: clicked ? "#FFFFFF" : "#00C9A7",
      color: clicked ? "black" : "white",
      fontWeight: "bold",
      borderRadius: 5,
    };
    // answer click logic
    const handleClick = (e) => { 
      if(personalValues.length <= 2){
        if(clicked){
          const valueIndex = personalValues.findIndex(index => index === e.target.value )
          const filteredArray = personalValues.filter((value,index) => index !== valueIndex)
          setPersonalValues(filteredArray);
          console.log("valor al sacar un elemento con menos de 3: ", filteredArray)
          setClicked(!clicked)
        }
        else{
          setPersonalValues([...personalValues ,e.target.value]);
          setClicked(!clicked)
          console.log("valor cuando es menor a 3 : ", personalValues)
        }
      } else{
        if(clicked){
          setClicked(!clicked)
          const valueIndex = personalValues.findIndex(index => index === e.target.value )
          const filteredArray = personalValues.filter((value,index) => index !== valueIndex)
          setPersonalValues(filteredArray);
          
          console.log(filteredArray)
          
        }
      }
    }
    return (
      <>
              <Button
              value={answer.value}
              name={answer.textoRespuesta}
              onClick={handleClick}
              sx={buttonStyles}
              variant="contained"
              >
                {answer.textoRespuesta}
              </Button>     
      </>
    );
}