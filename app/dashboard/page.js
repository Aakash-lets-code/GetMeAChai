"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Dashboard from '@/components/Dashboard'


const page = () => {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
       router.push('/login')
  }

  return (
    <>
     <Dashboard /> 
    </>
  )
}

export default page

// Metadata
export const metadata = {
  title: "Dashboard - Get Me A Chai",
}