import React from "react";
import Image from "next/image";
import { services } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import clsx from "clsx";
import PartnerImage from "@/assets/logo_1.png"
import { ArrowUpRight, RailSymbol } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <section className="w-full px-4">
        <div className="rounded-lg overflow-hidden w-full">
          <Image src={'https://images.pexels.com/photos/2036686/pexels-photo-2036686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} className="bg-cover bg-center rounded-md overflow-hidden" alt="" height={500} width={1500} />
        </div>
      </section>

      <main>
        <section className="mx-auto p-4">

          <h1 className="text-3xl font-bold  text-center ">Ils nous font confiance</h1>
          {/* <p className="text-center text-muted text-sm">
            Biashara Global
          </p> */}
          <div className="gap-6 flex items-center justify-center ">
            {
              Array.from({
                length: 4
              }).map((_, index) => (
                <div key={index} className="p-3 border border-gray-300 rounded-md">
                  {/* <CardContent> */}
                  <Image src={PartnerImage} height={200} width={200} lang="" alt="" />
                  {/* </CardContent> */}
                </div>
              ))
            }
          </div>
        </section>
        <section className="bg-teal-900 ">
          <div className="mx-auto p-4 ">
            <h1 className="text-3xl font-bold text-white text-center ">Welcome to Biashara Global!</h1>
            <p className="text-center text-muted text-sm">
              Biashara Global
            </p>
            {/* <p className="mt-4 text-lg text-muted text-center">
              Biashara Global is a global community that values education, empathy, and community-building. Our mission is to provide access to quality education and support for individuals with disabilities.
            </p> */}
            <div className="flex  items-center justify-center gap-3 flex-wrap">
              {
                services.slice(0, 6).map((service, index) => (
                  <Card key={index} className={clsx('bg-teal-900  bg-opacity-40 text-white w-[300px] border-none ')}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <RailSymbol color="#fff" size={25} />
                        <ArrowUpRight color="#fff" size={25} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h2 className="text-md font-semibold">{service.name}</h2>
                      <CardDescription className="py-2 text-white">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))
              }

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
