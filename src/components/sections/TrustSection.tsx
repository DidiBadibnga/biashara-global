"use client"
import Image from 'next/image'
import React from 'react'
import Society from "@/assets/logo_2.png"
const TrustSection = () => {
    return (
        <div className='py-10 bg-amber-200  bg-opacity-10 '>
            <div className='container px-5 flex flex-col space-y-4 max-w-5xl mx-auto '>
                <div className='flex items-center justify-center flex-wrap '>
                    {
                        Array.from({
                            length: 4
                        }).map((_, i) => (
                            <Image className='grayscale brightness-90 contrast-100' src={Society} width={75} height={40} alt='' />

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default TrustSection