import React from 'react'
import paymentPage from '@/components/paymentPage'


const Username = ({ params }) => {
  return (
    <>

    <paymentPage username={params.username}/>

    </>
  )
}

export default Username