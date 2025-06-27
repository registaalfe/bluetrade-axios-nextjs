"use client";
import React, { useState } from 'react';
import { FiMoreHorizontal, FiChevronDown } from 'react-icons/fi';

// Define currency data with Tailwind classes for dynamic styling
const currencyData = {
    USDT: { name: 'USDT', bgColor: 'bg-btnprofit', textColor: 'text-profit' },
    BTC: { name: 'BTC', bgColor: 'bg-[#FF9C0733]', textColor: 'text-[#FFB849]' },
    ETH: { name: 'ETH', bgColor: 'bg-[#4D21FF33]', textColor: 'text-[#9181DB]' },
    SOL: { name: 'SOL', bgColor: 'bg-[#FFD2D2]', textColor: 'text-[#F0A0A0]' },
};

// Get currency options from the data object
const currencyOptions = Object.keys(currencyData);

export default function CurrencyConverter() {
    const [fromAmount, setFromAmount] = useState('100');
    const [toAmount, setToAmount] = useState('0.0043'); // Read-only for now
    const [fromCurrency, setFromCurrency] = useState('USDT');
    const [toCurrency, setToCurrency] = useState('BTC');

    const handleFromAmountChange = (e) => {
        setFromAmount(e.target.value);
        // In a real app, this would trigger a conversion to update toAmount
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
        // In a real app, this would trigger a conversion
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
        // In a real app, this would trigger a conversion
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Convert</h2>
                <button className="p-2 rounded-full hover:bg-gray-100 text-[#7F8A9B66]">
                    <FiMoreHorizontal size={20} />
                </button>
            </div>

            {/* From Amount Input & Currency Dropdown */}
            <div className="flex mb-3">
                <input
                    type="number"
                    className="flex-1 bg-slate-100 border-none rounded-l-lg p-2 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={fromAmount}
                    onChange={handleFromAmountChange}
                />
                <div className="relative">
                    <select
                        className={`font-bold rounded-r-lg p-2 text-base appearance-none pr-8 focus:ring-2 focus:ring-blue-500 focus:outline-none ${currencyData[fromCurrency].bgColor} ${currencyData[fromCurrency].textColor}`}
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                    >
                        {currencyOptions.map((option) => (
                            <option key={option} value={option} className="text-black">
                                {option}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown size={16} className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none ${currencyData[fromCurrency].textColor}`} />
                </div>
            </div>

            {/* To Amount Input & Currency Dropdown */}
            <div className="flex mb-4">
                <input
                    type="number"
                    className="flex-1 bg-slate-100 border-none rounded-l-lg p-2 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={toAmount}
                    readOnly // This input is read-only
                />
                <div className="relative">
                    <select
                        className={`font-bold rounded-r-lg p-2 text-base appearance-none pr-8 focus:ring-2 focus:ring-blue-500 focus:outline-none ${currencyData[toCurrency].bgColor} ${currencyData[toCurrency].textColor}`}
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                    >
                        {currencyOptions.map((option) => (
                            <option key={option} value={option} className="text-black">
                                {option}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown size={16} className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none ${currencyData[toCurrency].textColor}`} />
                </div>
            </div>

            {/* Convert Now Button */}
            <button className="w-full bg-main text-white font-medium py-3 rounded-lg transition-colors mb-4 hover:bg-[#6366F1]">
                Convert Now
            </button>

            {/* Disclaimer Text */}
            <p className="text-xs font-normal text-[#626D7D] mb-2">
                The actual exchange rate may vary depending on the platform and time of conversion.
            </p>
        </div>
    );
}
