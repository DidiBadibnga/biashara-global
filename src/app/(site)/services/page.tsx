import React from 'react'
import Background from "@/assets/background.jpg"
import Image from 'next/image'
import Link from 'next/link'
const Sefvices = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-clip">
            <section className='relative  h-[50vh]  md:h-[70vh] z-0 '>
                <div className="relative h-full">
                    <Image src={Background} alt='' objectFit='cover' objectPosition='center' fill className='  absolute brightness-50 ' />
                </div>
                <div className="inset-0 absolute z-[999] ">
                    <div className='container px-5  h-full  flex-col space-y-4 flex mt-10 md:items-center justify-center'>
                        <h1 className='text-5xl sm:text-5xl font-bold text-center text-white '>
                            Nos Services
                        </h1>
                        {/* <p className=' text-gray-200 text-center md:text-left '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et ducimus molestiae pariatur, repellendus facere, odit sequi id earum omnis, sit asperiores possimus aperiam ab natus eius maxime temporibus consectetur.
                        </p> */}


                    </div>

                </div>
            </section>
        </div>
    )
}

export default Sefvices