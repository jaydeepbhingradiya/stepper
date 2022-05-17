import React from "react";
import { Box, TextField, Typography } from "@mui/material";

function BankDetails({ handleChange, person, errors }) {
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
        <Typography variant="h4">Bank Details</Typography>
      </div>
      <div>
        <TextField
          name="accountNumber"
          label="Account Number"
          defaultValue={person.accountNumber}
          onChange={handleChange}
          error={!!errors.accountNumber}
          helperText={errors.accountNumber}
        />
        <TextField
          name="ifsc"
          onChange={handleChange}
          label="IFSC"
          defaultValue={person.ifsc}
          error={!!errors.ifsc}
          helperText={errors.ifsc}
        />
        <TextField
          name="pancardNumber"
          label="PAN Card Number"
          defaultValue={person.pancardNumber}
          onChange={handleChange}
          error={Boolean(errors.pancardNumber)}
          helperText={errors.pancardNumber}
        />
        <TextField
          name="adharcardNumber"
          label="Adhar Card Number"
          defaultValue={person.adharcardNumber}
          onChange={handleChange}
          error={!!errors.adharcardNumber}
          helperText={errors.adharcardNumber}
        />
      </div>
    </Box>
  );
}

export default BankDetails;
