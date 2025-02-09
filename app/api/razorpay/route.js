import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import Razorpay from "razorpay";
import User from "/models/User";

export const POST = async (req) =>{
    await connectDB()
    let body = await req.formData()
    body = object.fromEnteries(body)

    // check if the razor pay order ID is present on the sever
    let p = await Payment.findOne({oid: body.razorpay_order_ID})
    if(!p){
        return NextResponse.json({success: false, message:"Order ID not found"})
    }

    // fetch the secert of the user who is getting the payment
    let user = await User.findOne({username: to_user})
    const secert  = user.razorpaySecert

    // verify the payment 
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id},  body.razorpay_signature, secert)

    if(xx){
        // update the payment status to paid
        const updatePayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_ID}, {done: "true"}, {new: true})
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatePayment.to_user}?paymentDone=true`)
    }
    else{
        return NextResponse.json({success: false, message:"payment verification failed"})
    }
}