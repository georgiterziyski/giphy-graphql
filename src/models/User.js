import mongoose from "mongoose";
import Gif from "./Gif";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    userType: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    gifs: {
        type: [Gif.schema]
    }
})

const User = mongoose.model("User", UserSchema);

export default User;