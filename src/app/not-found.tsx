import React from 'react'
import Link from 'next/link'
const NotFound = () => {
    return (
        <div className='max-w-4xl mx-auto w-full justify-center items-center'>
            <h2 className='text-blue-900 font-bold text-3xl md:text-6xl'>
                Not found
            </h2>
            <Link href={'/'} >

                Go back to the home page
                </Link>
        </div>
    )
}

export default NotFound