"use client"
import React,{ useState } from 'react' 
import { useSession, signIn, signOut } from "next-auth/react" 
import { useRouter } from 'next/router'


const page = () => {
  const { data: session } = useSession()
  
      if (session) {
           const router = useRouter()
           router.push('/login')
      }
  
  return (
    <div>page</div>
  )
}

export default page