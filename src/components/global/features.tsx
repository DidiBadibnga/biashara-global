import { services } from '@/lib/constants'
import React from 'react'
import { Card, CardContent, CardDescription } from '../ui/card'
import { BusFrontIcon } from 'lucide-react'
import clsx from 'clsx'

const Services = () => {
    return (
        <section className='py-4 px-2'>
            <div className="mb-5 space-y-2">
                <h3 className='text-3xl font-bold text-center '>
                    Nos Services
                </h3>
                <p className=' text-center text-lg text-gray-700 md:max-w-lg mx-auto'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    amet consectetur adipisicing elit.amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="container md:px-10  grid grid-cols-1 md:grid-cols-3 items-center gap-3">
                {
                    services.slice(0, 6).map((item, index) => (
                        <Card className={clsx("shadow-none p-3 bg-transparent hover:shadow-xl  transition-shadow duration-200 ease-in-out  ")}>
                            <CardContent className=''>
                                <CardDescription className={clsx("flex-col flex space-y-3 justify-center items-center")}>
                                    <div className="flex items-center justify-center bg-blue-600 rounded-full p-3">
                                        <BusFrontIcon className='' size={60} color='#fff' />
                                    </div>
                                    <h4 className='font-bold text-2xl text-black'>
                                        {item.name}
                                    </h4>
                                    <p className='text-center text-gray-900'>
                                        {item.description}
                                    </p>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>

        </section>
    )
}

export default Services
