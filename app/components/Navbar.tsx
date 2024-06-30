import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { PiFlowArrowBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

interface NavLinks {
    title: string,
    route: string,
}

const NavLinks = [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "About",
        route: "/"
    },
    {
        title: "Contact",
        route: "/"
    },
]

const Navbar = (title:string, route:string) => {
    return (
        <div className='p-5 flex flex-row items-center justify-between shadow-sm'>
            <div className=''>
                <h1 className=' text-2xl flex flex-row gap-2 font-bold'><PiFlowArrowBold className='text-[#6E24A8]' size={30} /> TaskFlow</h1>
            </div>
            <div className='w-1/4'>
                <ul className='hidden md:flex flex-row gap-5'>
                    {NavLinks.map((NavLink) => (
                        <li><Link href={NavLink.route}>{NavLink.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className=''>
            <FaGithub className='text-[#6E24A8]' size={35}/>
            </div>
        </div>
    )
}

export default Navbar