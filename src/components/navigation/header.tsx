"use client"
import { navLinks } from '@/lib/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from "@/assets/plura-logo.svg"
import Image from 'next/image'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-200 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"} md:px-10 md:py-5 p-4  flex items-center justify-between`}>
      <Link href={'#'} className="flex items-center justify-center gap-2">
        <Image
          src={Logo}
          width={40}
          height={40}
          alt="Biashara logo"
        />
        <h1 className='md:text-xl text-lg  font-bold'>Biashara Global</h1>
      </Link>
      <aside className="flex items-center gap-4">

        <nav className="md:flex items-center justify-center gap-3 hidden ">
          {
            navLinks.map((link, index) => {
              return (

                <Link href={link.route} key={index} className={`text-sm font-medium  `}>{link.name}</Link>

              )
            })
          }
        </nav>
        <Link href={'#'} className='bg-blue-900 text-white rounded-full px-3 py-1 flex items-center justify-center '>
          Contact Us
        </Link>
      </aside>

    </header>
  )
}

export default Header