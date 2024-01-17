export const investMentDetails = {
  accountType: {
    type: String,
    required: [true, "Please enter the account type"],
  },
  portfolio: {
    type: String,
    required: [true, "Please enter the portfolio"],
  },
  fundFeeCategory: {
    type: String,
    required: [true, "Please enter the fund fee category"],
  },
  investmentCategory: {
    type: String,
    required: [true, "Please enter the investment category"],
  },
  communicationAddress: {
    type: String,
    required: [true, "Please enter the communication address"],
  },
  country: {
    type: String,
    required: [true, "Please enter the country"],
  },
  accountHolder: {
    type: Number,
    required: [true, "Please enter the account holder"],
  },
  quantamInvestment: {
    type: Number,
    required: [true, "Please enter the quantam investment"],
  },
  investmentMode: {
    type: String,
    required: [true, "Please enter the investment mode"],
  },
};
