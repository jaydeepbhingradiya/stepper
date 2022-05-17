import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import ExperienceDetailForm from "./../experience-form/ExperienceDetailForm";

function ExperienceDetails({ handleChange, person, errors }) {
  const addExperienceHandler = () => {
    let curExpList = [...person.experienceDetails, {}];

    handleChange({
      target: { name: "experienceDetails", value: curExpList },
    });
  };

  const handleChange2 = (index, name, value) => {
    let currExp = { ...person.experienceDetails[index] };
    currExp[name] = value;
    let expList = [...person.experienceDetails];
    expList[index] = currExp;

    handleChange({
      target: {
        name: "experienceDetails",
        value: expList,
      },
    });
  };

  const removeFormHandler = (index) => {
    person.experienceDetails.splice(index, 1);

    handleChange({
      target: { name: "experienceDetails", value: person.experienceDetails },
    });
  };

  let getError = (index) => {
    if (index >= errors.experienceDetails.length) {
      return {};
    }
    return errors.experienceDetails[index];
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Experience Details </Typography>
      </div>
      <div>
        {(function () {
          let experienceForm = [];
          for (let i = 0; i < person.experienceDetails.length; i++) {
            experienceForm.push(
              <ExperienceDetailForm
                errors={getError(i)}
                // errors={
                //   (errors.experienceDetails && errors.experienceDetails[i]) ||
                //   {}
                // }
                index={i}
                key={i}
                removeForm={removeFormHandler}
                handleChange={handleChange2}
                experienceDetails={person.experienceDetails[i] || {}}
              />
            );
          }
          return experienceForm;
        })()}

        {/* {person.experienceDetails &&
          person.experienceDetails.map((experienceDetail, index) => (
            <ExperienceDetailForm
              index={index}
              key={index}
              removeForm={removeFormHandler}
              handleChange={handleChange2}
              experienceDetails={experienceDetail}
              errors={
                (errors.experienceDetails && errors.experienceDetails[index]) ||
                {}
              }
            />
          ))} */}
      </div>
      ;
      <div className="App">
        <Button onClick={addExperienceHandler}>
          <Icon baseClassName="fas" className="fa-plus-circle" />
        </Button>
        Add New Experience
      </div>
    </Box>
  );
}

export default ExperienceDetails;
