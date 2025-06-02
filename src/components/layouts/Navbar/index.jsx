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


// Set up Poppins with specified weights
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <nav className={`${toggleMenu ? "w-0" : "w-64"} ${poppinsFont.variable} box-border h-screen pt-[5px] pb-[5px] pl-8 pr-8 bg-white border-r-[1px] border-[#B5B5B5] sticky top-0 self-start transition-all duration-300 ease-in-out overflow-hidden text-wrap`}>
                <ul className="grid gap-y-3">
                    <li>
                        <div className="flex items-center justify-between pt-10 pb-10 pl-2 pr-2">
                            <div className="flex gap-1.5">
                                <Image src="/img/icon.png" alt="Logo" width={62} height={20} />
                                <h1 className="text-xl font-bold font-poppins">
                                    <span className="text-[#2F80ED]">Blue</span>Trade.
                                </h1>
                            </div>
                        </div>
                    </li>
                    <li className="flex p-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <MdDashboard className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Dashboard</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <MdCandlestickChart className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Markets</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <TbArrowsExchange className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Transactions</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <LuUserRound className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Profile</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <RiSettings5Fill className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Setting</span>
                        </a>
                    </li>
                </ul>
                <ul className="mt-6 grid gap-y-3 border-t-[1px] border-[#B5B5B5]">
                    <li className="flex mt-6 pt-3 pb-3 pl-3 pr-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <IoHelpCircleOutline className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Help</span>
                        </a>
                    </li>
                    <li className="flex pt-3 pb-3 pl-3 pr-3 rounded-lg text-black hover:text-main hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <MdLogout className="text-2xl" />
                            <span className="font-poppins font-medium text-md">Log Out</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <header className="flex items-center justify-between border-b border-gray-200 px-6 h-14">
                <a onClick={() => setToggleMenu(!toggleMenu)} className="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shadow-none hover:bg-accent hover:text-accent-foreground flex p-0 -ml-2 h-9 w-9 hover:bg-gray-300" type="button" aria-haspopup="dialog">
                    <TbMenu className="text-2xl" />
                </a>

                <form action="#" className="flex items-center flex-1 max-w-md max-md:hidden" method="GET">
                    <label className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full text-gray-400">
                        <input className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" id="search" name="search" placeholder="Search" type="search" />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i className="fas fa-search">
                            </i>
                        </div>
                    </div>
                </form>

                <div className="flex items-center space-x-6 pl-6">
                    <button aria-label="Notifications" className="text-gray-400 hover:text-gray-600 focus:outline-none" type="button">
                        <i className="far fa-bell text-lg">
                        </i>
                    </button>
                    <div className="flex items-center space-x-2 cursor-pointer select-none">
                        <img alt="Tom Cook profile picture bald man with glasses" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/bed91346-5ec1-4f6e-5e85-a5bdd18035dc.jpg" width="32" />
                        <span className="font-semibold text-gray-900 text-sm max-md:hidden">
                            Tom Cook
                        </span>
                        <i className="fas fa-chevron-down text-gray-400 text-xs">
                        </i>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Navbar;
