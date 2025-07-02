'use client';
import { useEffect, useState } from 'react';
import { getCoins } from '@/app/api/wallet';
import LineChart from '@/components/ui/line-chart';

export default function CoinsCard() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const data = await getCoins('usd', 1, 3);
                setCoins(data);
            } catch (error) {
                console.error('Error fetching coins:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            {/* start: Cryptocurrency Grid */}
            <div className="elementor-container grid grid-cols-3 gap-4 mb-6 max-lg:grid-cols-1">
                {coins.map((coin, index) => (
                    <div key={coin.id} className="elementor-column bg-white rounded-2xl p-6 flex flex-col">
                        <div className="elementor-element flex items-center space-x-3 mb-2 text-[#5a6477] font-semibold text-sm">
                            <img src={coin.image} alt={coin.name} width={40} height={20} />
                            <div className="space-y-1">
                                <p className="text-black font-poppins font-semibold text-sm leading-none lg:text-base">
                                    {coin.symbol.toUpperCase()}USDT
                                </p>
                                <p className="text-black font-poppins text-[10px] font-normal leading-none lg:text-sm">
                                    {coin.name}
                                </p>
                            </div>
                        </div>

                        <div className="items-center max-lg:flex max-lg:flex-col-reverse max-lg:items-start lg:grid lg:grid-cols-2">
                            <p className="text-black font-poppins font-semibold text-xs mb-1 lg:text-xl">
                                ${coin.current_price.toLocaleString()}
                            </p>
                            <LineChart data={coin.sparkline_in_7d.price} /> {/* ini dummy chart kamu, tetap bisa digunakan */}
                        </div>

                        <div className="flex justify-between items-center text-third font-poppins text-[10px] font-normal lg:text-xs">
                            <span>PNL Daily</span>
                            <span className="font-semibold text-profit text-xs font-poppins">
                                +${(coin.price_change_24h || 0).toFixed(2)}
                            </span>
                            <span className={`rounded-full px-3 py-1 ${coin.price_change_percentage_24h >= 0 ? 'bg-btnprofit text-profit' : 'bg-red-100 text-red-500'
                                }`}>
                                {coin.price_change_percentage_24h?.toFixed(2)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            {/* end: Cryptocurrency Grid */}
        </>
    );
}