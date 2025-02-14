"user server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { connect } from "mongoose"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()

     // fetch the secert of the user who is getting the payment
     let user = await User.findOne({username: p.to_user})
     const secert  = user.razorpaySecert

    var instance = new Razorpay({ key_id: user.razorpayID, key_secret: secert })
    // var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECERT }) // use this line when you have add the razorpay id and secert 



    let option = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(option)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x;
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connect()
    // find all payments sorted by decreasing order amount and flatten object ids
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

    // if the username is being updated , check if username is available
    if (oldusername !== ndata) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            throw new Error('Username is already taken')
        }
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the username in payments table
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})

        
    } 
    else{
        await User.updateOne({email: ndata.email}, ndata)
    }
}
