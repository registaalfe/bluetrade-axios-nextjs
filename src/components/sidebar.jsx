"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { MdDashboard } from "react-icons/md";
import { MdCandlestickChart } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import { RiSettings5Fill } from "react-icons/ri";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

// Set up Poppins with specified weights
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});

export default function DashboardSideBar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuItems = [
        { icon: <MdDashboard />, label: "Dashboard" },
        { icon: <MdCandlestickChart />, label: "Markets" },
        { icon: <TbArrowsExchange />, label: "Transactions" },
        { icon: <LuUserRound />, label: "Profile" },
        { icon: <RiSettings5Fill />, label: "Setting" },
    ];

    const footerItems = [
        { icon: <IoHelpCircleOutline />, label: "Help" },
        { icon: <MdLogout />, label: "Log Out" },
    ];

    return (
        <>
            {/* start: Sidebar */}
            <nav className={`${toggleMenu ? "w-20 p-1" : "w-64 pt-[5px] pb-[5px] pl-8 pr-8"} ${poppinsFont.variable} box-border h-screen bg-white border-r-[1px] border-[#B5B5B5] sticky top-0 self-start transition-all duration-300 ease-in-out overflow-hidden text-wrap max-md:hidden`}>
                <div className="flex items-center justify-between pt-8 pb-10 pl-2 pr-2">
                    <div className="flex gap-1.5">
                        <Image src="/img/icon.png" alt="Logo" width={62} height={20} />
                        <h1
                            className={`text-xl font-bold font-poppins transition-all duration-300 overflow-hidden whitespace-nowrap ${toggleMenu ? 'w-0 opacity-0' : 'w-auto opacity-100'
                                }`}
                        >
                            <span className="text-[#2F80ED]">Blue</span>Trade.
                        </h1>
                    </div>
                </div>

                <ul className={`flex flex-col gap-y-3 ${toggleMenu ? "items-center" : ""}`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex p-3 rounded-lg text-black hover:text-main hover:bg-secondary w-full">
                            <a
                                href="#"
                                title={toggleMenu ? item.label : ""}
                                className="flex items-center space-x-2 pl-3 pr-3"
                            >
                                {React.cloneElement(item.icon, {
                                    className: `text-2xl transition-all duration-200 ${toggleMenu ? 'mx-auto' : ''}`
                                })}
                                {!toggleMenu && (
                                    <span className="font-poppins font-medium text-md">{item.label}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className={`mt-6 grid gap-y-3 border-t border-[#B5B5B5] ${toggleMenu ? "items-center" : ""}`}>
                    {footerItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex mt-3 pt-3 pb-3 pl-3 pr-3 rounded-lg text-black hover:text-main hover:bg-secondary"
                        >
                            <a
                                href="#"
                                title={toggleMenu ? item.label : ""}
                                className="flex items-center space-x-2 pl-3 pr-3"
                            >
                                {React.cloneElement(item.icon, {
                                    className: `text-2xl transition-all duration-200 ${toggleMenu ? 'mx-auto' : ''}`
                                })}
                                {!toggleMenu && (
                                    <span className="font-poppins font-medium text-md">{item.label}</span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* end: Sidebar */}
        </>
    );
}
