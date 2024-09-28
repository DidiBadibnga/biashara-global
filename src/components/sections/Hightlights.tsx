"use client"
import clsx from 'clsx'
import React from 'react'
type Props = {
    className?: string;
}
const Hightlights: React.FC<Props> = ({
    className
}) => {
    return (

        <div className={clsx("py-10 bg-amber-100 bg-opacity-40", className)}>
            <div className='container px-5 flex  flex-row  max-w-5xl mx-auto items-center justify-center gap-4'>

                {
                    [1, 2, 3].map((_, i) => (
                        <div className=' flex flex-col ' key={i}>
                            <h3 className='md:text-7xl text-4xl font-bold text-blue-950 text-center'>
                                {(100) - (i * 12 + i)}+
                            </h3>
                            <p className='text-sm md:text-base text-gray-900 max-w-72'>
                                Lorem ipsum dolor, sit amet consect
                                ipsum ipsum
                            </p>

                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Hightlights