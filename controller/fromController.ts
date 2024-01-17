import { fianceForm } from "../models/fianceForm.ts";
import nodemailer from "nodemailer";
import { gmailOtp } from "../models/gmailOtp.ts";
// import { uploadFilesMiddleware } from "../app.ts";

export const createFianceFrom = async (req: any, res: any) => {
  try {
    const {
      applicantDetailData,
      bankPreferenceData,
      investMentDetailsData,
      nomieeDetailsData,
      riskProfilerData,
    } = req.body;
    const newFormData = await fianceForm.create({
      investMentDetails: investMentDetailsData,
      applicantDetails: applicantDetailData,
      bankDetails: bankPreferenceData,
      nomieeDetail: nomieeDetailsData,
      riskProfiler: riskProfilerData,
    });
    res
      .status(201)
      .json({ message: "Form Submitted successfully", newFormData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export const sendEmailOTP = async (req: any, res: any) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const Otp = Math.floor(100000 + Math.random() * 900000);

    const mailOptions = {
      from: process.env.MAIL_SENDER,
      to: req.body.email,
      subject: "OTP verification",
      text: Otp.toString(),
    };

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        console.log(error);
      } else {
        const newOtp = await gmailOtp.create({
          email: req.body.email,
          otp: Otp,
        });
      }
    });

    res.status(201).json({ message: "Mail sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
};

export const verifyOTP = async (req: any, res: any) => {
  try {
    const otp = await gmailOtp.findOne({ email: req.body.email });
    if (!otp) {
      res.status(400).json({ message: "OTP verification failed" });
    }
    if (otp.otp === req.body.otp) {
      await otp.deleteOne();
      res.status(200).json({ message: "OTP verified successfully" });
    } else {
      res.status(400).json({ message: "OTP verification failed" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const resentOTP = async (req: any, res: any) => {
  try {
    await gmailOtp.findOneAndDelete({ email: req.body.email });
    sendEmailOTP(req, res);
  } catch (err) {
    console.log(err);
  }
};

// export const uploadImage = async (req: any, res: any) => {
//   try {
//     const data = await uploadFilesMiddleware(req, res);
//     if (req.file == undefined) {
//       return res.send({
//         message: "You must select a file.",
//       });
//     }
//     return res.send({
//       message: "File has been uploaded.",
//     });
//   } catch (error) {
//     console.log(error);

//     return res.send({
//       message: "Error when trying upload image: ${error}",
//     });
//   }
// };
