"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false)
    // if(session) {
    //     return <>
    //       Signed in as {session.user.email} <br/>
    //       <button onClick={() => signOut()}>Sign out</button>
    //     </>
    //   }

    return (
        <nav className='bg-gray-900 text-white flex items-center justify-between px-8 h-14 relative z-50' >

            <Link className="logo font-bold text-xl flex gap-2 justify-center items-center" href={"/"}>

                GetMeAChai
                <span>
                    <img src="/tea.svg" alt="tea" width={40} className='invert' />
                </span>
            </Link>
            {/* <ul className='flex gap-3' >
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul> */}
            <div className='relative'>
                {session && <><button onBlur={() => {
                    setTimeout(() => {
                        setshowdropdown(false)
                    }, 100);
                }}
                    onClick={() => { setshowdropdown(!showdropdown) }}
                    id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    className="text-white mx-2 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                    <div id="dropdown" className={`absolute left-[125px] z-10 ${showdropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                            </li>
                            <li>
                                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                            </li>
                            <li>
                                <Link onClick={() => { signOut() }} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div></>
                }

                {!session && <Link href={"/login"}>
                    <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' >
                        Login
                    </button>
                </Link>}
            </div>
        </nav>
    )
}

export default Navbar