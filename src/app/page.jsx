import Image from 'next/image';
import LineChart from '@/components/ui/line-chart';
import BarChart from '@/components/ui/bar-chart';
import MarketList from '@/components/ui/market-list';
import CurrencyConverter from '@/components/ui/currency-converter';
import TransactionHistory from '@/components/ui/transaction-history';
import { Poppins } from 'next/font/google';
import { IoEyeOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

// Set up Poppins with specified weights
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});

export default async function Home() {
    const chartItems = [
        {
            title: "Bitcoin",
            symbol: "BTCUSDT",
            price: 23738,
            pnl: 14.67,
            chartData: [65, 67, 66, 69],
        },
        {
            title: "Ethereum",
            symbol: "ETHUSDT",
            price: 23738,
            pnl: 24.68,
            chartData: [60, 64, 63, 68],
        },
    ];

    // Optional: sort by PNL descending
    const sorted = chartItems.sort((a, b) => b.pnl - a.pnl);

    return (
        <>
            {/* start: Dashboard */}
            <section className={`${poppinsFont.variable} bg-foreground elementor-section elementor-top-section relative flex px-8 py-7`}>
                <div className="elementor-container flex flex-col">
                    <div className="elementor-element mb-3">
                        <h2 className="text-xl font-medium font-poppins">
                            Dashboard
                        </h2>
                    </div>

                    {/* start: Estimated Balance, visibility toggle, total value, monthly profit */}
                    <div className="elementor-column bg-white rounded-2xl px-5 pt-7 mb-6 h-44 space-y-4">
                        <div className="elementor-element flex justify-between items-center">
                            <div className="flex items-center space-x-3 text-[#5a6477] font-semibold text-base">
                                <Image src="/img/icon-wallet.png" alt="Logo" width={40} height={20} />
                                <span className="text-base text-black font-semibold font-poppins">
                                    Estimated Balance
                                </span>
                            </div>
                            <button aria-label="Toggle visibility" className="text-[#9ea6b3] text-xl">
                                <IoEyeOutline className="text-2xl text-[#5E6E78]" />
                            </button>
                        </div>
                        <p className="text-black font-poppins font-semibold text-2xl">
                            $123,987
                        </p>
                        <div className="flex justify-between items-center text-[#5a6477] text-sm font-normal">
                            <span className="text-third text-sm font-poppins">
                                Monthly Profit
                            </span>
                            <div className="flex items-center space-x-3">
                                <span className="font-semibold text-profit text-xs font-poppins">
                                    +$2560.78
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="bg-btnprofit rounded-full px-3 py-1 text-profit text-xs font-poppins font-semibold">
                                    +14.67%
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* end: Estimated Balance, visibility toggle, total value, monthly profit */}

                    {/* start: Cryptocurrency Grid */}
                    <div className="elementor-container grid grid-cols-2 gap-4 mb-6">
                        <div className="elementor-column bg-white rounded-2xl p-4 flex flex-col">
                            <div className="elementor-element flex items-center space-x-3 mb-2 text-[#5a6477] font-semibold text-sm">
                                <Image src="/img/icon-btc.png" alt="Logo" width={28} height={20} />
                                <div className="space-y-1">
                                    <p className="text-black font-poppins font-semibold text-sm leading-none">
                                        BTCUSDT
                                    </p>
                                    <p className="text-black font-poppins text-[10px] font-normal leading-none">
                                        Bitcoin
                                    </p>
                                </div>
                            </div>
                            <LineChart />
                            <p className="text-black font-poppins font-semibold text-xs mb-1">
                                $23,738
                            </p>
                            <div className="flex justify-between items-center text-black font-poppins text-[10px] font-normal">
                                <span>
                                    PNL Daily
                                </span>
                                <span className="bg-btnprofit text-profit rounded-full px-3 py-1 text-[10px">
                                    +14.67%
                                </span>
                            </div>
                        </div>

                        <div className="elementor-column bg-white rounded-2xl p-4 flex flex-col">
                            <div className="elementor-element flex items-center space-x-3 mb-2 text-[#5a6477] font-semibold text-sm">
                                <Image src="/img/icon-eth.png" alt="Logo" width={28} height={20} />
                                <div className="space-y-1">
                                    <p className="text-black font-poppins font-semibold text-sm leading-none">
                                        ETHUSDT
                                    </p>
                                    <p className="text-black font-poppins text-[10px] font-normal leading-none">
                                        Ethereum
                                    </p>
                                </div>
                            </div>
                            <LineChart />
                            <p className="text-black font-poppins font-semibold text-xs mb-1">
                                $23,738
                            </p>
                            <div className="flex justify-between items-center text-black font-poppins text-[10px] font-normal">
                                <span>
                                    PNL Daily
                                </span>
                                <span className="bg-btnprofit text-profit rounded-full px-3 py-1 text-[10px">
                                    +24.68%
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* end: Cryptocurrency Grid */}

                    {/* start: Detailed Monthly Chart */}
                    <div className="elementor-container bg-white rounded-2xl p-6 mb-6">
                        <div className="elementor-column flex justify-between items-center mb-4">
                            <div className="elementor-element">
                                <p className="text-black font-semibold text-lg">
                                    BTCUSDT
                                </p>
                                <p className="text-black font-normal text-sm">
                                    Bitcoin
                                </p>
                            </div>
                            <button aria-label="Select Monthly" className="bg-secondary rounded-full px-3 py-1 font-semibold flex items-center">
                                <span className="text-main text-xs">
                                    Monthly
                                </span>
                                <TiArrowSortedDown className="text-main text-xl mt-0.5" />
                            </button>
                        </div>
                        <BarChart />
                    </div>
                    {/* end: Detailed Monthly Chart */}

                    {/* start: Cryptocurrency Markets List */}
                    <div className="elementor-container bg-white rounded-2xl">
                        <MarketList />
                    </div>
                    {/* end: Cryptocurrency Markets List */}

                    {/* start: Currency Converter */}
                    <div className="elementor-container mt-6">
                        <CurrencyConverter />
                    </div>
                    {/* end: Currency Converter */}

                    {/* start: Transaction History */}
                    <div className="elementor-container mt-6">
                        <TransactionHistory />
                    </div>
                    {/* end: Transaction History */}
                </div>
            </section>
            {/* end: Dashboard */}
        </>
    );
}
