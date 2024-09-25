/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { getProjects } from '@/sanity/lib/project-query';
import { ProjectType } from '@/sanity/lib/types'
import React, { useEffect, useState } from 'react'

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

            {
                projects.map((project, index) => (
                    <div key={project._id}>
                        {project.name}
                    </div>
                ))
            }
        </div>
    )
}

export default Page
