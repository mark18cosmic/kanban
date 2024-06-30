import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { PiFlowArrowBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

interface NavLinkstype {
    title: string;
    route: string;
    key: string;
}

const NavLinks = [
    {
        title: "Home",
        route: "/",
        key: "1"
    },
    {
        title: "Pricing",
        route: "/",
        key: "2",

    },
    {
        title: "About",
        route: "/",
        key: "3"

    },
]

const Navbar = (Navlinks: NavLinkstype) => {
    return (
        <div className='p-5 flex flex-row items-center justify-between shadow-sm'>
            <div className=''>
                <h1 className=' text-2xl flex flex-row gap-2 font-bold'><PiFlowArrowBold className='text-purple-700' size={30} /> TaskFlow</h1>
            </div>
            <div className='w-1/4'>
                <ul className='hidden md:flex flex-row gap-5'>
                    {NavLinks.map((NavLink) => (
                        <li key={NavLink.key}><Link className='hover:border-b-2 border-purple-700' href={NavLink.route}>{NavLink.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className=''>
                <Link href="https://github.com/mark18cosmic/kanban">
                    <FaGithub className='text-purple-700' size={35} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar