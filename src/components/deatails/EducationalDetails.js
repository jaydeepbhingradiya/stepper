import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import EducatonDetailForm from "./../education-form/EducatonDetailForm";

function EducationalDetails({ person, handleChange, errors }) {
  const addEducationHandler = () => {
    let curEduList = [...person.educationalDetails, {}];

    handleChange({
      target: { name: "educationalDetails", value: curEduList },
    });
  };

  const handleChange2 = (index, name, value) => {
    let currEdu = { ...person.educationalDetails[index] };
    currEdu[name] = value;
    let eduList = [...person.educationalDetails];
    eduList[index] = currEdu;
    handleChange({
      target: {
        name: "educationalDetails",
        value: eduList,
      },
    });
  };

  const removeFormHandler = (index) => {
    person.educationalDetails.splice(index, 1);

    handleChange({
      target: { name: "educationalDetails", value: person.educationalDetails },
    });
  };

  let getError = (index) => {
    if (index >= errors.educationalDetails.length) {
      return {};
    }
    return errors.educationalDetails[index];
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
        <Typography variant="h4">Education Details </Typography>
      </div>
      <div>
        {(function () {
          let educationForm = [];
          for (let i = 0; i < person.educationalDetails.length; i++) {
            educationForm.push(
              <EducatonDetailForm
                index={i}
                key={i}
                errors={getError(i)}
                removeForm={removeFormHandler}
                handleChange={handleChange2}
                educationalDetails={person.educationalDetails[i] || {}}
              />
            );
          }
          return educationForm;
        })()}
      </div>
      <div className="App">
        <Button onClick={addEducationHandler}>
          <Icon baseClassName="fas" className="fa-plus-circle" />
        </Button>
        Add New Education
      </div>
    </Box>
  );
}

export default EducationalDetails;
