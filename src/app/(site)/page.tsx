import React from "react";

import Link from "next/link";
import Hero from "@/components/sections/hero";
import AboutSection from "@/components/sections/AboutSection";
import TrustSection from "@/components/sections/TrustSection";
import Hightlights from "@/components/sections/Hightlights";
import { ProjectCaroursel } from "@/components/sections/ProjectCaroursel";
import { Card } from "@/components/ui/card";
import { BusFrontIcon, PlusCircle } from "lucide-react";
import Background from "@/assets/background.jpg"
import Image from 'next/image'
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Hero />
      <Hightlights />
      <AboutSection />
      <TrustSection />
      <section className="py-10  ">
        {/* <ProjectCaroursel /> */}
        <div className="h-full  px-5 flex flex-col space-y-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {
              Array.from({
                length: 4
              }).map((_, i) => (
                <Card className="bg-black relative">

                  <Image src={Background} alt='' sizes="100%" className=' brightness-75 ' />
                  <div className="absolute  transition-colors duration-200 ease-in inset-0 bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-20">

                  </div>
                  <div className="absolute inset-0 pb-4 px-3 flex items-end ">

                    <h4 className="text-white text-xl font-semibold">
                      Project {i + 1}
                    </h4>

                  </div>


                </Card>
              ))
            }
          </div>
          <Button asChild className="max-w-32" >
            <Link href={'#'}>
              <span>
                See more
              </span>
              <PlusCircle size={15} className='ml-2' color='#fff' />
            </Link>
          </Button>
        </div>

      </section>
    </div>
  );
}
