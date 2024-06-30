import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { PiFlowArrowBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

interface NavLinkstype {
    title: string,
    route: string,
    key: string
}

const NavLinks = [
    {
        title: "Home",
        route: "/",
        key: "1"
    },
    {
        title: "About",
        route: "/",
        key: "1",

    },
    {
        title: "Contact",
        route: "/",
        key: "1"

    },
]

const Navbar = (Navlinks: NavLinkstype[]) => {
    return (
        <div className='p-5 flex flex-row items-center justify-between shadow-sm'>
            <div className=''>
                <h1 className=' text-2xl flex flex-row gap-2 font-bold'><PiFlowArrowBold className='text-[#6E24A8]' size={30} /> TaskFlow</h1>
            </div>
            <div className='w-1/4'>
                <ul className='hidden md:flex flex-row gap-5'>
                    {NavLinks.map((NavLink) => (
                        <li key={NavLink.key}><Link href={NavLink.route}>{NavLink.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className=''>
                <FaGithub className='text-[#6E24A8]' size={35} />
            </div>
        </div>
    )
}

export default Navbar