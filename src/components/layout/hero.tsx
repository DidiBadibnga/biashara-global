import React from 'react'
import Background from "@/assets/background_1.jpg"
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
    return (
        <section className='py-5  px-2 md:px-0 '>
            <div className='container flex-col md:flex-row flex   gap-10   items-center justify-center mx-auto md:px-12 '>
                <div className="md:mb-14 mb-4 lg:mb-0 lg:w/1/2">
                    <h1 className='text-[2.9rem] max-w-xl  leading-none font-extrabold text-black text-center lg:text-5xl lg:text-left lg:leading-tight mb-5 '>
                        Une Nation, 
                        <br />
                       
                        Une <span className='text-blue-600'> Entreprise</span>
                       
                    </h1>
                    <p className="max-w-xl text-center text-black lg:text-left lg:max-w-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates numquam dignissimos error, eveniet nam totam veniam, quo nobis id reprehenderit at, cumque voluptatum a quae. Iste voluptatibus pariatur itaque?
                    </p>
                    <div className="mt-5 flex justify-center lg:justify-start ">
                        <Link className="bg-blue-600 shadow-none p-3 flex items-center justify-center text-white font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"  href={'#'}>
                         Decouvrez
                        </Link>
                    </div>
                </div>
                

                <div className=" w-full lg:w-1/2 h-[280px] relative md:h-[400px] ">
                
                    <Image className=' h-full absolute bg-center lg:rounded-lg ' objectFit='cover' fill alt='' src={Background} />
                </div>
            </div>
        </section>
    )
}

export default Hero
