import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: { type: String, require: true },
    to_user: { type: String, required: true },
    oid: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    createdAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now },
    razorpayid: {type: string}, 
    razorpaysecret: {type: string}, 
    done: { type: Boolean, default: false },
});
 
const Payment =  mongoose.models.Payment ||  model("Payment", PaymentSchema); 
export default Payment;