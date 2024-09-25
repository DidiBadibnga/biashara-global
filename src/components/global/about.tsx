import React from 'react'
import Background from "@/assets/background.jpg"
import Image from 'next/image'
import Link from 'next/link'
const AboutSection = () => {
    return (
        <section id="about" className="py-5  px-2 md:px-0 bg-gray-100">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10" >
                    {/* Left Column: Text Content */}
                    <div className=" w-full lg:w-1/2 h-[280px] relative md:h-[400px]">
                        <Image
                            objectFit='cover'
                            src={Background}
                            fill // Replace with your image path
                            alt="About Us"
                            className="w-full bg-center rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
                        <p className="text-lg text-gray-600 mb-6 text-center">
                            We are a leading construction company dedicated to delivering high-quality projects.
                            Our team of professionals brings years of experience and expertise to ensure that your vision comes to life.
                        </p>
                        <p className="text-lg text-center text-gray-600 mb-6">
                            Our commitment to safety, quality, and client satisfaction sets us apart in the industry.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href="#contact"
                                className="inline-block md:mx-0  bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}

                </div>
            </div>
        </section>
    )
}

export default AboutSection
