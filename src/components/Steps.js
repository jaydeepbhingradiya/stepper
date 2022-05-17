import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Step, StepLabel, Stepper, Box } from "@mui/material";
import PersonalDetails from "./deatails/PersonalDetails";
import BankDetails from "./deatails/BankDetails";
import ProfessionalDetails from "./deatails/ProfessionalDetails";
import CurrentStatus from "./deatails/CurrentStatus";
import ExperienceDetails from "./deatails/ExperienceDetails";
import EducationalDetails from "./deatails/EducationalDetails";
// import {
//   bankDetails,
//   currentStatus,
//   educationalDetails,
//   experienceDetails,
//   personalDetails,
//   professionalDetails,
// } from "./helper/validate";

const steps = [
  "Personal Details",
  "Bank Details",
  "Professional Details",
  "Current Status",
  "Experience Details",
  "Educational Details",
];

const details = {
  skills: [],
  experienceDetails: [],
  educationalDetails: [],
};
let id = Math.random().toString();
function Steps({ showList, selectData }) {
  const dispatch = useDispatch();
  const [person, setPeroson] = useState(details);
  const [formErrors, setFormErrors] = useState({
    experienceDetails: [],
    educationalDetails: [],
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleSubmit = () => {
    debugger;
    console.log("selected", person);
    console.log("selected id", person.id);
    console.log("selected name", person.firstName);

    let ttype = "UPDATE_PERSON";

    if (!person.id) {
      person.id = id;
      ttype = "ADD_PERSON";
    }

    if (activeStep === 5) {
      dispatch({
        type: ttype,
        payload: person,
      });

      showList();
    }

    // let errors = {};
    // let validators = [
    //   personalDetails,
    //   bankDetails,
    //   professionalDetails,
    //   currentStatus,
    //   experienceDetails,
    //   educationalDetails,
    // ];

    // errors = validators[activeStep](person);

    // if (errors.isValid && activeStep === steps.length - 1) {
    //   dispatch({ type: "ADD_PERSON", payload: person });
    // } else if (errors.isValid && activeStep < steps.length) {
    //   setActiveStep(activeStep + 1);
    // }
    // setFormErrors(errors);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const exithandler = () => {
    showList();
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    let curState = { ...person };
    curState[name] = value;

    setPeroson(curState);
    // person[name] = value;
    // setPeroson({ ...person });

    // let errors = {};
    // let validators = [
    //   personalDetails,
    //   bankDetails,
    //   professionalDetails,
    //   currentStatus,
    //   experienceDetails,
    //   educationalDetails,
    // ];

    // errors = validators[activeStep](person);

    // if (!errors.isValid) {
    //   // setActiveStep(activeStep + 1);
    //   setFormErrors(errors.errors);
    // }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper className="steps" activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <React.Fragment>
        <div className="step">
          {(function () {
            switch (activeStep) {
              case 0:
                return (
                  <PersonalDetails
                    handleChange={handleChange}
                    person={person}
                    errors={formErrors}
                    selectData={selectData}
                  />
                );
              case 1:
                return (
                  <BankDetails
                    handleChange={handleChange}
                    person={person}
                    errors={formErrors}
                    selectData={selectData}
                  />
                );
              case 2:
                return (
                  <ProfessionalDetails
                    handleChange={handleChange}
                    person={person}
                    errors={formErrors}
                    selectData={selectData}
                  />
                );
              case 3:
                return (
                  <CurrentStatus
                    handleChange={handleChange}
                    person={person}
                    errors={formErrors}
                    selectData={selectData}
                  />
                );
              case 4:
                return (
                  <ExperienceDetails
                    handleChange={handleChange}
                    person={person}
                    errors={formErrors}
                    selectData={selectData}
                  />
                );
              case 5:
                return (
                  <EducationalDetails
                    handleChange={handleChange}
                    person={person}
                    errors={formErrors}
                    selectData={selectData}
                  />
                );
              default:
                break;
            }
          })()}
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            mx: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} style={{ border: "1px" }} />
          <Button
            color="inherit"
            onClick={exithandler}
            sx={{ mr: 1, bgcolor: "red", color: "white" }}
          >
            exit
          </Button>
          <Box sx={{ flex: "1 1 auto" }} style={{ border: "1px" }} />

          <Button
            variant="contained"
            disabled={activeStep < 5}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Box sx={{ flex: "1 1 auto" }} style={{ border: "1px" }} />

          <Button
            variant="contained"
            disabled={activeStep === 5}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </React.Fragment>
    </Box>
  );
}
export default Steps;
