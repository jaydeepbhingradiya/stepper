import React, { useState } from "react";
import { Typography, TextField, Box } from "@mui/material";

function PersonalDetails({ handleChange, person, errors, selectData }) {
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
        "& .MuiTextField-root": { m: 1, width: "90%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Personal Details</Typography>
        {loadDone && (
          <img className="img" alt="profile-piture" src={profileImg} />
        )}
        <Typography variant="h6">Profile picture</Typography>
        <TextField
          type="file"
          style={{ width: "20%" }}
          inputProps={{ accept: "image/*" }}
          name="Profile-upload"
          onChange={imageHandler}
        />
      </div>
      <div>
        <TextField
          name="firstName"
          onChange={handleChange}
          // defaultValue={person.firstName}
          defaultValue={selectData.firstName}
          label="First Name"
          error={!!errors.firstName}
          helperText={errors.firstName}
        />

        <TextField
          name="lastName"
          onChange={handleChange}
          defaultValue={selectData.lastName}
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextField
          name="phoneNumber"
          onChange={handleChange}
          defaultValue={selectData.phoneNumber}
          label="Phone"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
        <TextField
          type="email"
          inputProps={{ type: "email" }}
          name="email"
          onChange={handleChange}
          defaultValue={selectData.email}
          label="Email"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          name="dateOfBirth"
          onChange={handleChange}
          defaultValue={selectData.dateOfBirth}
          type="date"
          label="Date of Birth"
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
export default PersonalDetails;
