import Image from 'next/image';
import BarChart from '@/components/ui/bar-chart';
import MarketList from '@/components/ui/market-list';
import CurrencyConverter from '@/components/ui/currency-converter';
import TransactionHistory from '@/components/ui/transaction-history';
import { Poppins } from 'next/font/google';
import { IoEyeOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import CoinsCard from '@/components/ui/coins-card';

// Set up Poppins with specified weights
const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});

export default async function Home() {

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

                    <div className="flex flex-col lg:flex-row lg:gap-4">
                        {/* start: Cryptocurrency Grid */}
                        <CoinsCard />
                        {/* end: Cryptocurrency Grid */}
                    </div>

                    {/* start: Detailed Monthly Chart */}
                    <div className="elementor-container lg:grid lg:grid-cols-2 gap-4">
                        <div className="elementor-column items-center bg-white rounded-2xl p-6">
                            <div className="flex flex-row justify-between items-center">
                                <div className="elementor-element flex flex-col">
                                    <p className="text-black font-semibold text-lg">
                                        BTCUSDT
                                    </p>
                                    <p className="text-black font-normal text-sm">
                                        Bitcoin
                                    </p>
                                </div>
                                <div className="elementor-element flex">
                                    <button aria-label="Select Monthly" className="bg-secondary rounded-full px-3 py-1 font-semibold flex items-center">
                                        <span className="text-main text-xs">
                                            Monthly
                                        </span>
                                        <TiArrowSortedDown className="text-main text-xl mt-0.5" />
                                    </button>
                                </div>
                            </div>
                            <BarChart />
                        </div>
                        {/* end: Detailed Monthly Chart */}

                        {/* start: Cryptocurrency Markets List */}
                        <div className="elementor-column bg-white rounded-2xl">
                            <MarketList />
                        </div>
                        {/* end: Cryptocurrency Markets List */}
                    </div>

                    <div className="elementor-container lg:grid lg:grid-cols-2 gap-4">
                        {/* start: Currency Converter */}
                        <div className="elementor-column mt-6">
                            <CurrencyConverter />
                        </div>
                        {/* end: Currency Converter */}

                        {/* start: Transaction History */}
                        <div className="elementor-column mt-6">
                            <TransactionHistory />
                        </div>
                        {/* end: Transaction History */}
                    </div>
                </div>
            </section>
            {/* end: Dashboard */}
        </>
    );
}
