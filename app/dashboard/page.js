"use client"
import React,{ useState } from 'react' 
import { useSession, signIn, signOut } from "next-auth/react" 
import { useRouter } from 'next/navigation'


const page = () => {
  const { data: session } = useSession()
  const router = useRouter()
  
      if (!session) {
           router.push('/login')
      }
  
  return (
    <div>page</div>
  )
}

export default page