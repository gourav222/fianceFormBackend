import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT || 4000;

export const MONGO_URL = process.env.MONGO_URL as string;

export const GMAIL = process.env.GMAIL;

export const PASSWORD = process.env.PASSWORD;
