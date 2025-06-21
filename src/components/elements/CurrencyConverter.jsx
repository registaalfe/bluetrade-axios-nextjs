import React, { useState } from 'react';
import { FiMoreHorizontal, FiChevronDown } from 'react-icons/fi';

const currencyOptions = ['USDT', 'BTC', 'ETH', 'SOL'];

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
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
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
                        className="bg-slate-200 font-bold rounded-r-lg p-2 text-base appearance-none pr-8 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={fromCurrency}
                        onChange={handleFromCurrencyChange}
                    >
                        {currencyOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
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
                        className="bg-slate-200 font-bold rounded-r-lg p-2 text-base appearance-none pr-8 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={toCurrency}
                        onChange={handleToCurrencyChange}
                    >
                        {currencyOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <FiChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                </div>
            </div>

            {/* Convert Now Button */}
            <button className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors mb-4">
                Convert Now
            </button>

            {/* Disclaimer Text */}
            <p className="text-xs text-slate-500 text-center">
                The actual exchange rate may vary depending on the platform and time of conversion.
            </p>
        </div>
    );
}
