export const bankDetails = {
  bankDetails: {
    type: String,
    required: [true, "Please enter the bank details"],
  },
  bankName: {
    type: String,
    required: [true, "Please enter the bank name"],
  },
  accountNum: {
    type: String,
    required: [true, "Please enter the account number"],
  },
  accountTitle: {
    type: String,
    required: [true, "Please enter the account title"],
  },
  bankIFSC: {
    type: String,
    required: [true, "Please enter the bank IFSC"],
  },
};
