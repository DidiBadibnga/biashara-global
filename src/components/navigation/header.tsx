import { navLinks } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div className='w-full md:px-10 md:py-4 p-3 flex items-center justify-between'>
      <div className="flex items-center justify-center gap-2">
        <h1 className='text-xl font-bold'>Biashara Global</h1>
      </div>
      <nav className="flex items-center justify-center gap-3">
        {
          navLinks.map((link, index) => {
            return (

              <Link href={link.route} key={index} className={`text-sm font-medium  `}>{link.name}</Link>

            )
          })
        }
      </nav>
      <Link href={'#'} className='bg-foreground text-white rounded-full px-3 py-1 flex items-center justify-center '>
        Contact
      </Link>
    </div>
  )
}

export default Header