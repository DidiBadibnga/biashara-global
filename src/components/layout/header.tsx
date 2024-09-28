"use client"
import { navLinks } from '@/lib/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from "@/assets/plura-logo.svg"
import Image from 'next/image'
import { Button } from '../ui/button'
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
    <header className={`w-full fixed  z-50 transition-all duration-200 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"} md:px-10 md:py-5 px-5 py-4  flex items-center justify-between`}>
      <Link href={'#'} className="flex items-center justify-center gap-2">
        <Image
          src={Logo}
          width={40}
          height={40}
          alt="Biashara logo"
        />
        <h1 className={`md:text-xl text-lg  font-bold ${isScrolled ? "text-black" : "text-white"}`}>Biashara Global</h1>
      </Link>
      <aside className="flex items-center gap-4">

        <nav className="md:flex items-center justify-center gap-3 hidden ">
          {
            navLinks.map((link, index) => {
              return (
                <Link href={link.route} key={index} className={`text-sm font-medium ${isScrolled ? "text-black" : "text-white"}  `}>{link.name}</Link>
              )
            })
          }
        </nav>
        <Button asChild >
          <Link href={'#'} className=' '>
            Contact Us
          </Link>
        </Button>
      </aside>

    </header>
  )
}

export default Header