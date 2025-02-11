import React from 'react'

const Footer = () => {

    const currentYear  = new Date().getFullYear();

    return (
        <footer className='bg-gray-900 text-white  '>
            <div className="  flex justify-center items-center py-4  ">
                <p>
                     Copyright © {currentYear} Get me A chai -All rights resereved
                </p>
            </div>
        </footer>
    )
}

export default Footer 