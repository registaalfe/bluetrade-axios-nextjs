"use client";
import { useState, useEffect } from 'react';
import { getCoins } from '@/app/api/wallet'; // sesuaikan path kamu

// CryptoRow Sub-component (sama seperti sebelumnya)
const CryptoRow = ({ ticker, name, price, change }) => {
    const isPositive = change >= 0;
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    return (
        <div className="flex items-center justify-between py-3 px-4 border border-r-0 border-l-0 border-gray-100">
            <div className="flex flex-col">
                <span className="text-black font-bold text-base">{ticker}</span>
                <span className="text-third text-sm">{name}</span>
            </div>
            <div className="text-black text-base">
                {formattedPrice}
            </div>
            <div
                className={`rounded-full px-3 py-1 text-xs font-semibold ${isPositive ? 'bg-btnprofit text-profit' : 'bg-downgbg text-down'
                    }`}
            >
                {isPositive ? '+' : ''}{change.toFixed(2)}%
            </div>
        </div>
    );
};

// MarketList Component
export default function MarketList() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');

    // Just 1 dummy category for now
    const filterButtons = ['All', 'Defi'];

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const data = await getCoins('usd', 1, 4); // ambil 5 coin aja
                setCoins(data);
            } catch (err) {
                console.error('Failed to fetch coins:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, []);

    const filteredCoins = coins.filter((coin) => {
        if (activeFilter === 'All') return true;
        // Nanti kalau punya kategori, tinggal cocokin di sini
        return coin.category === activeFilter;
    });

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6 lg:mt-0">
            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-6 items-center justify-between">
                <h2 className="text-lg font-bold ml-3">Markets</h2>
                <div className="space-x-2">
                    {filterButtons.map((filter) => (
                        <button
                            key={filter}
                            className={`rounded-xl px-3 py-2 text-xs font-medium ${activeFilter === filter
                                ? 'bg-secondary text-main'
                                : 'bg-[#F8F8F9] text-black'
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Coin List */}
            <div className="items-center">
                {loading ? (
                    <p className="text-center text-sm text-gray-500">Loading...</p>
                ) : (
                    filteredCoins.map((coin) => (
                        <CryptoRow
                            key={coin.id}
                            ticker={coin.symbol.toUpperCase()}
                            name={coin.name}
                            price={coin.current_price}
                            change={coin.price_change_percentage_24h}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
