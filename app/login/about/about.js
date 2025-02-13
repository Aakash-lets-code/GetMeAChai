import React from 'react'

const about = () => {
    return (
        // This about page is generated with github copilot so take a look before using this or make any changes if needed
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-center text-gray-900">About</h1>
                    <p className="mt-4 text-lg text-center text-gray-600">
                        Welcome to GetMeAChai! This platform is designed to help creators get support from their fans.
                        Our mission is to provide a seamless experience for both creators and supporters.
                    </p>
                </div>
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <h2 className="text-2xl font-bold text-gray-900">Our Features</h2>
                    <ul className="mt-4 space-y-4">
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="ml-3 text-base text-gray-700">Easy to use interface</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="ml-3 text-base text-gray-700">Secure transactions</p>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="ml-3 text-base text-gray-700">24/7 Support</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default about