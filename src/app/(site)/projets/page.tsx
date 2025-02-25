/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { getProjects } from '@/sanity/lib/project-query';
import { ProjectType } from '@/sanity/lib/types'
import React, { useEffect, useState } from 'react'
import Background from "@/assets/background.jpg"
import Image from 'next/image'
const Page = () => {
    const [projects, setProjects] = useState<ProjectType[]>([])
    useEffect(() => {
        async function fetchProducts() {
            const allProjects: ProjectType[] = await getProjects();
            setProjects(allProjects);
        }
        fetchProducts();
    }, []);
    return (
        <div className='min-h-screen'>
            <section className='relative  h-[50vh]  md:h-[70vh] z-0 '>
                <div className="relative h-full">
                    <Image src={Background} alt='' objectFit='cover' objectPosition='center' fill className='  absolute brightness-50 ' />
                </div>
                <div className="inset-0 absolute z-[999] ">
                    <div className='container px-5  h-full  flex-col space-y-4 flex mt-10 md:items-center justify-center'>
                        <h1 className='text-5xl md:text-8xl font-bold text-center text-white '>
                            Nos projets
                        </h1>



                    </div>

                </div>
            </section>
            <div className='container px-5 flex flex-col space-y-4 max-w-5xl mx-auto'>
                {/* <h2 className='text-3xl text-center font-bold text-black'>
                    About Us
                </h2>
                <p className='text-center max-w-xl mx-auto '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ea laudantium! Quos aperiam laboriosam architecto, fuga eveniet in quasi impedit a voluptas, quia porro natus iusto incidunt similique quibusdam aut?
                </p> */}
                {
                    projects.map((project, index) => (
                        <div key={project._id}>
                            {project.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page
