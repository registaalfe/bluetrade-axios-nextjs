"use client";
import React, { useState, useRef, useEffect } from 'react';
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

// We create this reusable component to avoid duplicating code.
const CurrencyDropdown = ({ selectedCurrency, setCurrency, isDropdownOpen, setIsDropdownOpen }) => {
    const dropdownRef = useRef(null);
    const currencyInfo = currencyData[selectedCurrency];

    // This effect adds an event listener to close the dropdown when clicking outside of it.
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        // Cleanup the event listener when the component is unmounted
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef, setIsDropdownOpen]);

    return (
        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            {/* This button shows the current currency and opens the dropdown */}
            <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-between w-full font-bold p-3 text-base rounded-lg sm:rounded-l-none ${currencyInfo.bgColor} ${currencyInfo.textColor} ${currencyInfo.ringColor} focus:outline-none focus:ring-2`}
            >
                <span className="mr-2">{selectedCurrency}</span>
                <FiChevronDown size={20} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* The list of currency options. It only renders if 'isDropdownOpen' is true. */}
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full min-w-[120px] bg-white rounded-md shadow-lg z-10 border border-slate-200">
                    <div className="p-1">
                        {currencyOptions.map((option) => (
                            <div
                                key={option}
                                onClick={() => {
                                    setCurrency(option);
                                    setIsDropdownOpen(false); // Close dropdown after selection
                                }}
                                className="block w-full text-left px-3 py-2 text-sm rounded-md text-slate-700 hover:bg-slate-100 cursor-pointer"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default function CurrencyConverter() {
    const [fromAmount, setFromAmount] = useState('100');
    const [toAmount, setToAmount] = useState('0.0043'); // Read-only for now
    const [fromCurrency, setFromCurrency] = useState('USDT');
    const [toCurrency, setToCurrency] = useState('BTC');
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <div className="bg-white rounded-xl shadow-sm p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Convert</h2>
                <button className="p-2 rounded-full hover:bg-gray-100 text-[#7F8A9B66]">
                    <FiMoreHorizontal size={20} />
                </button>
            </div>

            {/* "From" Input Section */}
            <div className="flex flex-col sm:flex-row w-full bg-slate-100 rounded-xl p-1 mb-3">
                <input
                    type="number"
                    className="w-full sm:flex-1 bg-transparent border-none p-3 text-lg text-slate-800 focus:outline-none placeholder:text-slate-400"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.0"
                />
                <CurrencyDropdown
                    selectedCurrency={fromCurrency}
                    setCurrency={setFromCurrency}
                    isDropdownOpen={openDropdown === 'from'}
                    setIsDropdownOpen={(isOpen) => setOpenDropdown(isOpen ? 'from' : null)}
                />
            </div>

            {/* To Amount Input & Currency Dropdown */}
            <div className="flex flex-col sm:flex-row w-full bg-slate-100 rounded-xl p-1 mb-6">
                <input
                    type="number"
                    className="w-full sm:flex-1 bg-transparent border-none p-3 text-lg text-slate-800 focus:outline-none placeholder:text-slate-400"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    placeholder="0.0"
                />
                <CurrencyDropdown
                    selectedCurrency={toCurrency}
                    setCurrency={setToCurrency}
                    isDropdownOpen={openDropdown === 'to'}
                    setIsDropdownOpen={(isOpen) => setOpenDropdown(isOpen ? 'to' : null)}
                />
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
