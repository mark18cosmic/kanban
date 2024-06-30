import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import landingpage from "@/public/landingpage.png"

export default function Home() {
  return (
    <div className="p-5 md:p-8">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        {/* Title and description */}
        <div className=" space-y-3 md:w-1/2">
          <h2 className="font-bold text-4xl md:text-5xl">Streamline Projects with <span className="bg-[#6E24A8] text-white">Precision</span> and <span className="bg-[#6E24A8] text-white">Flexibility</span></h2>
          <p className="text-lg leading-normal">Transform your project management with our agile kanban board designed to manage workflows and enhance collaboration. Whether you're a startup, a growing team, or an established enterprise.</p>
          <div className="hidden items-center md:flex flex-col gap-2">
            <Button className=" text-white rounded-lg  font-semibold bg-[#6E24A8] text-lg w-full ">Start Now</Button>
            <p className="text-gray-600 font-thin">This project is a work in progress</p>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <Image className="rounded-xl shadow-xl" src={landingpage} alt="LandingPageImage" />
        </div>
        <Button className="md:hidden flex text-white font-semibold bg-[#6E24A8] w-full">Start Now</Button>
      </div>

    </div>
  );
}
