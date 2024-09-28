import React from 'react'
import Background from "@/assets/background.jpg"
import Image from 'next/image'
const Contact = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <section className='relative  h-[50vh]  md:h-[70vh] z-0 '>
                <div className="relative h-full">
                    <Image src={Background} alt='' objectFit='cover' objectPosition='center' fill className='  absolute brightness-50 ' />
                </div>
                <div className="inset-0 absolute z-[999] ">
                    <div className='container px-5  h-full  flex-col space-y-4 flex mt-10 md:items-center justify-center'>
                        <h1 className='text-5xl sm:text-5xl font-bold text-center text-white '>
                            Contact
                        </h1>
                        {/* <p className=' text-gray-200 text-center md:text-left '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et ducimus molestiae pariatur, repellendus facere, odit sequi id earum omnis, sit asperiores possimus aperiam ab natus eius maxime temporibus consectetur.
                        </p> */}


                    </div>

                </div>
            </section>
            <section className='py-10'>
                <div className='container px-5 flex flex-col space-y-4 max-w-5xl mx-auto'>
                    <h2 className='text-3xl text-center font-bold text-black'>
                        Contactez-nous
                    </h2>
                    {/* <p className='text-center max-w-xl mx-auto '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea laudantium! Quos aperiam laboriosam architecto, fuga eveniet in quasi impedit a voluptas, quia porro natus iusto incidunt similique quibusdam aut?
                    </p> */}
                    </div>
            </section>
        </div>
    )
}

export default Contact