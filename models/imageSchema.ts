import mongoose from "mongoose";
let imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});

export const imgSchema = mongoose.model("image", imageSchema);