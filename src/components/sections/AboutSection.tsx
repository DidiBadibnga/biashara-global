import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { CarTaxiFront } from 'lucide-react'
import clsx from 'clsx'

const AboutSection = () => {
    return (
        <section className='py-10'>
            <div className='container px-5 flex flex-col space-y-4 max-w-5xl mx-auto'>
                <h2 className='text-3xl text-center font-bold text-black'>
                    About Us
                </h2>
                <p className='text-center max-w-xl mx-auto '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea laudantium! Quos aperiam laboriosam architecto, fuga eveniet in quasi impedit a voluptas, quia porro natus iusto incidunt similique quibusdam aut?
                </p>
                <div className='grid w-full  mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4'>
                    {Array.from({
                        length: 3
                    }).map((_, idx) => (
                        <Card key={idx} className={`shadow-none rounded-none ${idx  % 2 === 0 ?  "bg-primary text-secondary " : ""}  ` }>
                            <CardHeader>
                                <div className='flex justify-center '>
                                    <CarTaxiFront color={`${idx % 2 === 0 ? " #fff " : "#000"}`} size={40} />

                                </div>
                            </CardHeader>
                            <CardContent >
                                <h3 className='text-center font-bold text-xl'>
                                    Service {idx + 1}
                                </h3>
                                <p className='text-center '>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit atque commodi nostrum debitis consequuntur itaque tenetur magnam rem? Suscipit rem consequatur aut praesentium ratione dolorum magni beatae distinctio, pariatur voluptatibus.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AboutSection