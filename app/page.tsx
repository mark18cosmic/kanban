import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import landingpage from "@/public/landingpage.png"

export default function Home() {
  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        {/* Title and description */}
       <div className="text-white space-y-3 md:w-1/2">
        <h2 className="font-bold text-2xl md:text-4xl">Manage Projects with <span className="bg-[#6E24A8]">Precision</span> and <span className="bg-[#6E24A8]">Flexibility</span></h2>
        <p>Transform your project management with our agile kanban board designed to streamline workflows and enhance collaboration. Whether you're a startup, a growing team, or an established enterprise.</p>
        <Button className="hidden md:flex text-white font-semibold bg-[#6E24A8] w-40 ">Start Now</Button>
       </div>
       {/* Image */}
       <div className="md:w-1/2">
        <Image className="rounded-xl shadow-md" src={landingpage} alt="LandingPageImage"/>
       </div>
       <Button className="md:hidden flex text-white font-semibold bg-[#6E24A8] w-32">Start Now</Button>
      </div>
    </div>
  );
}
