import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
const steps = ["Preguntas", "Personaliza tu meta", "terminemos el registro"];

export const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const { currentStep } = useSelector((store) => store.user);
  console.log(currentStep);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={currentStep}
        sx={{
          "& .MuiStepConnector-line": {
            borderTopWidth: "4px",
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: "red",
          },
          "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
            borderColor: "green",
          },
          "& .QontoStepIcon-completedIcon": {
            color: "#784af4",
            zIndex: 1,
            fontSize: 18,
          },
        }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-active": {
                    color: "#12192c",
                    fontWeight:"bold"
                  },
                  "&.Mui-disabled .MuiStepLabel-label": {
                    color: "#ccc",
                    fontWeight:"bold"
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {currentStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography gutterBottom variant="h5"  sx={{ mt: 2, mb: 1, fontWeight:"bold", color:"#12192c" }}>Paso {currentStep + 1}</Typography> */}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
