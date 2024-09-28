import React from 'react'
import Logo from "@/assets/plura-logo.svg"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='py-10 bg-blue-950'>
      <section className='container px-5 flex flex-col space-y-3 max-w-7xl mx-auto'>
        <div>
          <Link href={'#'} className="flex items-center  gap-2">
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="Biashara logo"
            />
            <h1 className={`md:text-xl text-lg  font-bold text-white`}>Biashara Global</h1>
          </Link>
        </div>
        <div className="border-t border-gray-100 py-3 text-center ">
          <p  className='text-white'>
            &copy; 2024 Biashara Global DRC. All Rights Reserved
          </p>
        </div>
        
      </section>
    </footer>
  )
}

export default Footer
