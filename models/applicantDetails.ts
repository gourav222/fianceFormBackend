import validator from "validator";
export const applicantDetails = {
  applicantName: {
    type: String,
    required: [true, "Please enter the applicant name"],
    maxLength: [50, "Max length should exceeds more than 50 characters"],
    minLength: [3, "Please enter valid name"],
  },
  contactNum: {
    type: String,
    required: [true, "Please enter the contact number"],
  },
  numOTP: {
    type: String,
    required: [true, "Please enter the OTP"],
    maxLength: [6, "Max length should exceeds more than 50 characters"],
    minLength: [6, "Please enter valid name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the user mail Id"],
    validate: [validator.isEmail, "Please enter valid email"],
  },
  emailOTP: {
    type: String,
    required: [true, "Please enter the OTP"],
    maxLength: [6, "Max length should exceeds more than 50 characters"],
    minLength: [6, "Please enter valid name"],
  },
  panCardNum: {
    type: String,
    required: [true, "Please enter the pan card number"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Please enter the date of birth"],
  },
  panCard: {
    type: String,
    required: [true, "Please enter the pan card"],
  },
  aadharCard: {
    type: String,
    required: [true, "Please enter the aadhar card"],
  },
};
