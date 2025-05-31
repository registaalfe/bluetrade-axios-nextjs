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

const Sidebar = () => {
    return (
        <div className={`${poppinsFont.variable} box-border h-screen w-64 pt-[5px] pb-[5px] pl-8 pr-8 bg-white border-r-[1px] border-[#B5B5B5] sticky top-0 self-start transition-all duration-300 ease-in-out overflow-hidden text-wrap`}>
            <div className="flex items-center justify-between pt-10 pb-10 pl-2 pr-2">
                <div className="flex gap-1.5">
                    <Image src="/img/icon.png" alt="Logo" width={62} height={20} />
                    <h1 className="text-xl font-bold font-poppins">
                        <span className="text-[#2F80ED]">Blue</span>Trade.
                    </h1>
                </div>
            </div>
            <nav className="mt-4">
                <ul className="grid gap-y-3">
                    <li className="flex p-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <MdDashboard className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Dashboard</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <MdCandlestickChart className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Markets</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <TbArrowsExchange className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Transactions</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <LuUserRound className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Profile</span>
                        </a>
                    </li>
                    <li className="flex p-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <RiSettings5Fill className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Setting</span>
                        </a>
                    </li>
                </ul>
                <ul className="mt-6 grid gap-y-3 border-t-[1px] border-[#B5B5B5]">
                    <li className="flex mt-6 pt-3 pb-3 pl-3 pr-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <IoHelpCircleOutline className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Help</span>
                        </a>
                    </li>
                    <li className="flex pt-3 pb-3 pl-3 pr-3 rounded-lg hover:bg-secondary">
                        <a href="#" className="flex items-center space-x-2 pl-3 pr-3">
                            <MdLogout className="text-2xl text-black" />
                            <span className="text-black font-poppins font-medium text-md">Log Out</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
