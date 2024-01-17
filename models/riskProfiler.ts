export const riskProfiler = {
  investmentExp: {
    type: String,
    required: [true, "Please enter the investment experience"],
  },
  investStyle: {
    type: String,
    required: [true, "Please enter the investment style"],
  },
  diversified: {
    type: String,
    required: [true, "Please enter the diversified investment"],
  },
  investMentObj: {
    type: String,
    required: [true, "Please enter the investment objective"],
  },
  riskTolerance: {
    type: String,
    required: [true, "Please enter the risk tolerance"],
  },
  horizon: {
    type: String,
    required: [true, "Please enter the investment horizon"],
  },
};
