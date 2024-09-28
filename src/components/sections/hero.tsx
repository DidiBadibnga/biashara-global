import React from 'react'
import Background from "@/assets/background.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
const Hero = () => {
    return (
        <section className='relative  h-[70vh]  md:h-[100vh] z-0 '>
            <div className="relative h-full">
                <Image src={Background} alt='' objectFit='cover' objectPosition='center' fill className='  absolute brightness-75 ' />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-65 z-50 w-full">

            </div>

            <div className="inset-0 absolute z-[999] ">
                <div className='container px-5  h-full  flex-col space-y-4 flex mt-10 md:items-start justify-center'>
                    <h1 className='text-3xl  md:text-7xl font-bold text-center md:text-left max-w-xl text-white '>
                        The Living 
                        Foundations of Excellence
                    </h1>
                    <p className=' text-gray-200 text-center md:text-left max-w-xl '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et ducimus molestiae pariatur, repellendus facere, odit sequi id earum omnis, sit asperiores possimus aperiam ab natus eius maxime temporibus consectetur.
                    </p>
                    <div>
                        {/*  */}
                        <Button asChild>
                            <Link href={'#'}>
                                <span>
                                    Consult now
                                </span>
                                <ArrowRight size={15} className='ml-2' color='#fff'/>
                            </Link>
                        </Button>
                    </div>
                    
                </div>

            </div>
        </section>

    )
}

export default Hero
