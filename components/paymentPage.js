"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate } from '@/action/useractions'
import { useSession } from 'next-auth/react'
import { fetchpayments, fetchuser, initiate } from '@/action/useractions'


const paymentPage = ({ username }) => {
    // const {data: session} = useSession()

    const [paymentform, setPaymentform] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setPayments] = useState()

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments);
    }


    const pay = async (amount) => {

        // get the order id 
        let a = await initiate(amount, username, paymentform)
        let orderID = a.id

        var options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            // "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID, //This is a sample Order ID. Pass the id obtained in the response of Step 1
            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>



            <div className='cover w-full relative'>
                <img className='w-full h-[350] object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/17.gif?token-time=1738627200&token-hash=9ELNdGxKi3Cy06RYQQPuTwrVfYJgf_TBjThU5A7wrSM%3D" alt="cover" />
                <div className='absolute -bottom-14 right-[703] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={100} height={100} src="/profile.jpg" alt="profile" />
                </div>
            </div>


            <div className="info flex justify-center items-center flex-col gap-3 mt-16">

                <div className='font-bold text-lg'>
                    @{username}
                </div>

                <div className='text-slate-600'>
                    Created animated art for VTT'S
                </div>

                <div className='text-slate-600'>
                    9,719 members . 82 posts . $15,450/release
                </div>
            </div>


            <div className="payment flex w-[80%] gap-3 text-white my-16 mx-auto ">

                <div className="supporters w-1/2 bg-slate-900 rounded-lg p-6">
                    {/* Show list of all the supporter as the leader board */}
                    <h2 className=' text-2xl font-bold my-5 '>Supporters</h2>
                    <ul className=' mx-4 text-lg'>
                        {payments.map((p, i) => {
                            return <li key={i} className='flex text-center py-1 px-2 gap-1'>
                                <div className='text-center'><img className=' invert w-7' src="/avatar.svg" alt="avatar" /></div>
                                <div >
                                    {p.name} donated <b>${p.amount}</b> with a Message
                                    <span> "{p.message}"</span>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>

                <div className="makepayment w-1/2 bg-slate-900 rounded-lg p-6">

                    <h2 className=' text-2xl font-bold my-5 '>Make a Payment</h2>
                    <div className="flex gap-2 flex-col">
                        {/* input for message and name */}
                        <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder='Enter Name' className='rounded-lg bg-slate-800 p-3 w-full' />

                        <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder='Enter Message' className='rounded-lg bg-slate-800 p-3 w-full' />

                        <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" placeholder='Enter Amount' className='rounded-lg bg-slate-800 p-3 w-full' />

                        <button onClick={() => { pay(Number.parseInt(paymentform.amount) * 100) }} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                    </div>

                    {/* or choose form these amount */}
                    <div className="flex mt-5 gap-2">
                        <button className='border-none bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)} >Pay ₹10</button>
                        <button className='border-none bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)} >Pay ₹20</button>
                        <button className='border-none bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)} >Pay ₹30</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default paymentPage