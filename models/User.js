import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: string, required: true },
    profilepic: { type: string },
    coverpic: { type: string },
    CreatedAt: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now }
})
 
export default mongoose.model.User ||  model("User", UserSchema);
