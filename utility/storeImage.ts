import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { config } from "dotenv";
config();
const url = process.env.MONGO_URL as string;
// console.log(url,'lllll');
// const storage = new GridFsStorage({
//   url,
//   file: (req, file) => {
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//       console.log(file,"   ")
//       return {
//         bucketName: "photos",
//         filename: `${Date.now()}_${file.originalname}`,
//       };
//     } else {
//       return `${Date.now()}_${file.originalname}`;
//     }
//   },
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//   }
// });

import util from "util";
// const dbConfig = require("../config/db");

const storage =   new GridFsStorage({
  url: url,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      console.log("@@@", filename);
      return filename;
    }

    console.log("####", {
      bucketName: "imagestest",
      filename: `${Date.now()}-bezkoder-${file.originalname}`,
    });
    return {
      bucketName: "imagestest",
      filename: `${Date.now()}-bezkoder-${file.originalname}`,
    };
  },
});

const uploadFiles = multer({ storage: storage }).single("file");
export const uploadFilesMiddleware = util.promisify(uploadFiles);
