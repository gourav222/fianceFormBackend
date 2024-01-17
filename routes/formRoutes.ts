import express from "express";
import {
  createFianceFrom,
  sendEmailOTP,
  verifyOTP,
  resentOTP,
  // uploadImage,
} from "../controller/fromController.ts";

// import { uploadFilesMiddleware } from "../utility/storeImage.ts";

const router = express.Router();

router.route("/fianceForm").post(createFianceFrom);

router.route("/sendEmail").post(sendEmailOTP);

router.route("/verifyOTP").post(verifyOTP);

router.route("/resentOTP").post(resentOTP);

// router.route("/uploadImage").post(uploadImage);

export default router;
