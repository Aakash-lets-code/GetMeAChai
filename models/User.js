import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    CreatedAt: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now }
})
 
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;