import React, { Fragment } from "react";
import { Box, TextField, Paper, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function EducatonDetailForm({
  removeForm,
  educationalDetails,
  index,
  handleChange,
  errors,
}) {
  const removeFormHandler = () => {
    removeForm(index);
  };

  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        // autoComplete="off"
      >
        <Paper className="paper" elevation={3}>
          <div className="cls-btn">
            <Button onClick={removeFormHandler}>
              <CancelIcon sx={{ color: "red" }} />
            </Button>
          </div>
          <div className="App">
            <TextField
              label="Course"
              name="course"
              defaultValue={educationalDetails.course}
              onChange={(e) => {
                handleChange(index, "course", e.target.value);
              }}
              error={!!errors.course}
              helperText={errors.course}
            />
            <TextField
              label="Univercity"
              name="univercity"
              defaultValue={educationalDetails.univercity}
              onChange={(e) => {
                handleChange(index, "univercity", e.target.value);
              }}
              error={!!errors.univercity}
              helperText={errors.univercity}
            />
            <TextField
              type="date"
              label=" Pass on"
              name="educationPassOut"
              defaultValue={educationalDetails.educationPassOut}
              onChange={(e) => {
                handleChange(index, "educationPassOut", e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.educationPassOut}
              helperText={errors.educationPassOut}
            />
            <TextField
              label=" Grade"
              name="grade"
              defaultValue={educationalDetails.grade}
              onChange={(e) => {
                handleChange(index, "grade", e.target.value);
              }}
              error={!!errors.grade}
              helperText={errors.grade}
            />
          </div>
        </Paper>
      </Box>
    </Fragment>
  );
}

export default EducatonDetailForm;
