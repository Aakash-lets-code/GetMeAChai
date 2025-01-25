import mongoose from "mongoose";
const {Schema , model} = mongoose;

const UserSchema = new Schema({
name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    username:{type: string},
    profilepic:{type: string},
    coverpic:{type: string}, 
    CreatedAt:{type:Date, default: Date.now},
    updatedAT:{type:Date, default: Date.now}
})

const User = model("User", UserSchema)
export default mongoose.model.User || User;
    