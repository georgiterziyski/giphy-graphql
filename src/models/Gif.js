import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GifSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Gif = mongoose.model("Gif", GifSchema);

export default Gif;