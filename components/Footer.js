import React from 'react'

const Footer = () => {

    const currentYear  = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-white'>
            <div className="container mx-auto px-4 py-4 flex justify-center items-center">
                <p className="text-center text-sm sm:text-base md:text-lg ">
                    Copyright © {currentYear} Get me A chai - All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer 