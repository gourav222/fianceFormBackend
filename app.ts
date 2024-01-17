import express from "express";
import { config } from "dotenv";
import fianceRoutes from "./routes/formRoutes.ts";
// import multer from "multer";
// import { GridFsStorage } from "multer-gridfs-storage";
import util from "util";
import cors from "cors";
config();
const app = express();
app.use(cors());
app.use(express.json());
// const url = process.env.MONGO_URL as string;
// const storage = new GridFsStorage({
//   url: url,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     const match = ["image/png", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-bezkoder-${file.originalname}`;
//       return {_id:"dfdfdfdf",filename};
//     }
//     return {
//       _id: "jnndnfdf",
//       bucketName: "imagestest",
//       filename: `${Date.now()}-bezkoder-${file.originalname}`,
//     };
//   },
// });

// const uploadFiles = multer({ storage: storage }).single("file");
// export const uploadFilesMiddleware = util.promisify(uploadFiles);
app.use("/api/v1", fianceRoutes);
export default app;
