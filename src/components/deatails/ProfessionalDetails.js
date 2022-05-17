import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import MultipleSelectChip from "../multipleselectchip/MultipleSelectChip";

function ProfessionalDetails({ handleChange, person, errors }) {
  const [profileImg, setProfileImg] = useState("");
  const [loadDone, setLoadDone] = useState(false);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLoadDone(reader.readyState === 2);
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Professional Details</Typography>
        {loadDone && <img className="cv" alt="resume" src={profileImg} />}

        <Typography variant="h6">Resume</Typography>
        <TextField
          type="file"
          style={{ width: "20%" }}
          inputProps={{ accept: "application/pdf" }}
          name="resume-upload"
          onChange={imageHandler}
        />
      </div>
      <div>
        <p>Total Experienace</p>
        <TextField
          name="totalYearofExperience"
          type="number"
          label="Year"
          defaultValue={person.totalYearofExperience}
          onChange={handleChange}
          error={!!errors.totalYearofExperience}
          helperText={errors.totalYearofExperience}
        />
        <TextField
          type="number"
          name="totalmonthofExperience"
          label="Months"
          defaultValue={person.totalmonthofExperience}
          onChange={handleChange}
          error={!!errors.totalmonthofExperience}
          helperText={errors.totalmonthofExperience}
        />
      </div>
      <div className="chip">
        <MultipleSelectChip onchange={handleChange} skills={person.skills} />
        {!!errors.skills && <p>{errors.skills}</p>}
      </div>
    </Box>
  );
}

export default ProfessionalDetails;
