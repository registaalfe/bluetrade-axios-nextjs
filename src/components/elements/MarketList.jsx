import React, { useState } from 'react';
import Image from 'next/image';

// Mock Data with Categories
const marketData = [
    {
        ticker: 'BTC',
        name: 'Bitcoin',
        price: 23495.50,
        change: 1.25,
        category: 'Metaverse', // Example category
    },
    {
        ticker: 'ETH',
        name: 'Ethereum',
        price: 1650.75,
        change: -0.80,
        category: 'Defi',
    },
    {
        ticker: 'ADA',
        name: 'Cardano',
        price: 0.35,
        change: 0.05,
        category: 'Defi',
    },
    {
        ticker: 'SOL',
        name: 'Solana',
        price: 22.10,
        change: -2.10,
        category: 'Metaverse',
    },
    {
        ticker: 'DOT',
        name: 'Polkadot',
        price: 6.20,
        change: 0.75,
        category: 'Defi',
    },
    {
        ticker: 'MANA',
        name: 'Decentraland',
        price: 0.68,
        change: 3.10,
        category: 'Metaverse',
    },
    {
        ticker: 'UNI',
        name: 'Uniswap',
        price: 6.50,
        change: 1.50,
        category: 'Defi',
    },
];

// CryptoRow Sub-component
const CryptoRow = ({ ticker, name, price, change }) => {
    const isPositive = change >= 0;
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price);

    return (
        <div className="flex items-center justify-between py-3 px-4">
            {/* Left: Ticker and Name */}
            <div className="flex flex-col">
                <span className="text-black font-bold text-base">{ticker}</span>
                <span className="text-gray-500 text-sm">{name}</span>
            </div>

            {/* Middle: Price */}
            <div className="text-black text-base">
                {formattedPrice}
            </div>

            {/* Right: Change Badge */}
            <div
                className={`rounded-full px-3 py-1 text-xs font-semibold ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}
            >
                {isPositive ? '+' : ''}{change.toFixed(2)}%
            </div>
        </div>
    );
};

// MarketList Component
export default function MarketList() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filterButtons = ['All', 'Metaverse', 'Defi'];

    const filteredData = marketData.filter((coin) => {
        if (activeFilter === 'All') {
            return true;
        }
        // Assuming a coin can belong to multiple categories, or just one.
        // For simplicity, checking if the coin's category matches the active filter.
        // If a coin can have multiple categories, this logic would need to be expanded.
        return coin.category === activeFilter;
    });

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">

            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-6 items-center justify-between">
                <h2 className="text-lg font-bold ml-3">Markets</h2>
                <div className="space-x-2">
                    {filterButtons.map((filter) => (
                        <button
                            key={filter}
                            className={`rounded-xl px-3 py-2 text-xs font-medium ${activeFilter === filter
                                ? 'bg-slate-800 text-white'
                                : 'bg-slate-200 text-slate-600'
                                }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cryptocurrency Markets List */}
            <div className="items-center">
                {filteredData.map((coin) => (
                    <CryptoRow
                        key={coin.ticker}
                        ticker={coin.ticker}
                        name={coin.name}
                        price={coin.price}
                        change={coin.change}
                    />
                ))}
            </div>
        </div>
    );
}