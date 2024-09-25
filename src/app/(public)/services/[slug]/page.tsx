/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { ServiceType } from '@/sanity/lib/types';
import React, { useState } from 'react'

const Page = ({
    params
}: {
    params: {
        slug: string;
    }
}) => {
    
    return (
        <div>{
            params.slug
        }</div>
    )
}

export default Page