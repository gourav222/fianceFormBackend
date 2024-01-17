import mongoose from "mongoose";
import { investMentDetails } from "./investmentDetails.ts";
import { applicantDetails } from "./applicantDetails.ts";
import { bankDetails } from "./bankDetails.ts";
import { nomieeDetail } from "./nomieeDetail.ts";
import { riskProfiler } from "./riskProfiler.ts";

const fianceFormSchema = new mongoose.Schema({
  investMentDetails,
  applicantDetails,
  bankDetails,
  nomieeDetail: [nomieeDetail],
  riskProfiler,
});

export const fianceForm = mongoose.model("fianceForm", fianceFormSchema);
