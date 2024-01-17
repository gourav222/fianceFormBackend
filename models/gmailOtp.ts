import mongoose from "mongoose";

const mailOTP = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter the email"],
  },
  otp: {
    type: String,
    required: [true, "Please enter the otp"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30, 
  },
});

export const gmailOtp = mongoose.model("gmailOtp", mailOTP);
