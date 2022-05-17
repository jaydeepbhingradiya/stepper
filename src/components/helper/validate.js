export const personalDetails = (values) => {
  let errors = {
    isValid: true,
  };
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.firstName) {
    errors.firstName = "Required!";
    errors.isValid = false;
  }

  if (!values.lastName) {
    errors.lastName = "Required!";
    errors.isValid = false;
  }

  if (!values.email) {
    errors.email = "Required!";
    errors.isValid = false;
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
    errors.isValid = false;
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required!";
    errors.isValid = false;
  } else if (values.phoneNumber.length !== 10) {
    errors.phoneNumber = "Phone number must be 10 characters";
    errors.isValid = false;
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Required!";
    errors.isValid = false;
  }
  return errors;
};

export const bankDetails = (values) => {
  let errors = {
    isValid: true,
  };
  const regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if (!values.accountNumber) {
    errors.accountNumber = "Required!";
    errors.isValid = false;
  }

  if (!values.ifsc) {
    errors.ifsc = "Required!";
    errors.isValid = false;
  }

  if (!values.pancardNumber) {
    errors.pancardNumber = "Required!";
    errors.isValid = false;
  } else if (!regpan.test(values.pancardNumber)) {
    errors.pancardNumber = "This is not a valid pancard format!";
    errors.isValid = false;
  }

  if (!values.adharcardNumber) {
    errors.adharcardNumber = "Required!";
    errors.isValid = false;
  } else if (values.adharcardNumber.length !== 12) {
    errors.adharcardNumber = "This is not a valid adharcard number!";
    errors.isValid = false;
  }

  return errors;
};

export const professionalDetails = (values) => {
  let errors = {
    isValid: true,
  };

  if (!values.totalYearofExperience) {
    errors.totalYearofExperience = "Required!";
    errors.isValid = false;
  }

  if (!values.totalmonthofExperience) {
    errors.totalmonthofExperience = "Required!";
    errors.isValid = false;
  }

  if (values.skills.length === 0) {
    errors.skills = "Required!";
    errors.isValid = false;
  }

  return errors;
};

export const currentStatus = (values) => {
  let errors = {
    isValid: true,
  };

  if (!values.currentDesignation) {
    errors.currentDesignation = "Required!";
    errors.isValid = false;
  }

  if (!values.currentDepartment) {
    errors.currentDepartment = "Required!";
    errors.isValid = false;
  }

  if (!values.currentCTC) {
    errors.currentCTC = "Required!";
    errors.isValid = false;
  }

  if (!values.startWorkingFrom) {
    errors.startWorkingFrom = "Required!";
    errors.isValid = false;
  }

  return errors;
};

export const experienceDetails = (values) => {
  let errors = { isValid: true, experienceDetails: [] };

  if (values.experienceDetails.length !== 0) {
    for (let i = 0; i < values.experienceDetails.length; i++) {
      let experienceDetail = values.experienceDetails[i];
      let error = {};

      if (!experienceDetail.previousCompanyName) {
        error.previousCompanyName = "Required";
        errors.isValid = false;
      }
      if (!experienceDetail.previousCompanyDesignation) {
        error.previousCompanyDesignation = "Required";
        errors.isValid = false;
      }
      if (!experienceDetail.previousCompanyDepartment) {
        error.previousCompanyDepartment = "Required";
        errors.isValid = false;
      }
      if (!experienceDetail.previousCompanyCTC) {
        error.previousCompanyCTC = "Required";
        errors.isValid = false;
      }

      if (!experienceDetail.previousCompanyStartDate) {
        error.previousCompanyStartDate = "Required";
        errors.isValid = false;
      }
      if (!experienceDetail.previousCompanyLeaveDate) {
        error.previousCompanyLeaveDate = "Required";
        errors.isValid = false;
      }
      errors.experienceDetails.push(error);
    }
  }
  return errors;
};

export const educationalDetails = (values) => {
  console.log("values", values);
  let errors = { isValid: true, educationalDetails: [] };

  if (values.educationalDetails.length !== 0) {
    for (let i = 0; i < values.educationalDetails.length; i++) {
      let educationalDetail = values.educationalDetails[i];
      let error = {};

      if (!educationalDetail.course) {
        error.course = "Required";
        errors.isValid = false;
      }
      if (!educationalDetail.univercity) {
        error.univercity = "Required";
        errors.isValid = false;
      }

      if (!educationalDetail.educationPassOut) {
        error.educationPassOut = "Required";
        errors.isValid = false;
      }

      if (!educationalDetail.grade) {
        error.grade = "Required";
        errors.isValid = false;
      }

      errors.educationalDetails.push(error);
    }
  }

  console.log("errors", errors);

  return errors;
};
