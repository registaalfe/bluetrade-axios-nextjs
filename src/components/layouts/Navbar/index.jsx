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
import { TbMenu } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { CiMenuKebab } from "react-icons/ci";




// Set up Poppins with specified weights
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});

const Navbar = () => {
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

            {/* start: Header */}
            <header className={`${poppinsFont.variable} flex items-center justify-between border-b border-gray-200 px-10 h-20 max-md:px-8`}>

                <form action="#" className="flex items-center flex-1 max-w-md" method="GET">
                    <a onClick={() => setToggleMenu(!toggleMenu)} className="mx-2 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shadow-none hover:bg-accent hover:text-accent-foreground flex p-0 -ml-2 h-9 w-9 text-main hover:bg-secondary" type="button" aria-haspopup="dialog">
                        <TbMenu className="text-2xl" />
                    </a>

                    <div className="flex w-full text-gray-400 rounded-full border border-gray-200 placeholder-gray-400 focus:outline-1 focus:outline-amber-400 max-md:hidden">
                        <label className="sr-only">
                            Search...
                        </label>
                        <input className="block w-full pl-6 pr-3 py-2 text-sm focus:outline-none" id="search" name="search" placeholder="Search" type="search" />
                        <div className="inset-y-0 flex items-center pr-3 pointer-events-none text-right">
                            <IoSearch className="text-xl" />
                        </div>
                    </div>
                </form>

                <div className="flex items-center space-x-6 pl-6">
                    <button aria-label="Notifications" className="flex p-0 h-9 w-9 items-center justify-center rounded-md text-main hover:bg-secondary focus:outline-none max-md:hidden" type="button">
                        <GoBell className="text-xl" />
                    </button>

                    <div className="flex px-4 py-2 items-center space-x-2 cursor-pointer select-none min-md:bg-foreground rounded-xl max-md:space-x-0 max-md:bg-none">
                        <Image src="/img/user-profile.png" alt="Logo" width={40} height={20} />
                        <div className="flex flex-col gap-1 pr-4 max-md:hidden">
                            <h3 className="font-semibold text-black text-sm">Bravsy Mertrey</h3>
                            <span className="font-semibold text-black text-[11px]">bravsymert@mail.com</span>
                        </div>
                        <CiMenuKebab className="max-md:hidden" />
                    </div>
                </div>
            </header>
            {/* end: Header */}
        </>
    );
};

export default Navbar;
