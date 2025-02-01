import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import Razorpay from "razorpay";

export const POST = async (req) =>{
    await connectDB()
    let body = await req.formData()
    body = object.fromEnteries(body)

    // check if the razor pay order ID is present on the sever
    let p = await Payment.findOne({oid: body.razorpay_order_ID})
    if(!p){
        return NextResponse.error("Order id not found")
    }
}