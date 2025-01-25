import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: { type: string, require: true },
    to_user: { type: string, required: true },
    oid: { type: string, required: true },
    message: { type: string },
    amount: { type: Number, required: true },
    createdAt: { type: string, default: Date.now },
    updatedAt: { type: string, default: Date.now },
    done: { type: Boolean, default: false },
});

const Payment = model("Payment", PaymentSchema);
export default mongoose.models.Payment || Payment; 