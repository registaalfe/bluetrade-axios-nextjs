"use client";
import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

const durations = [
    { label: 'Monthly', value: 30 },
    { label: '7 Weeks', value: 90 },
];

export default function DurationSelector({ days, setDays }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelect = () => {
        setShowDropdown(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                aria-label="Select Duration"
                className="bg-secondary rounded-full px-3 py-1 font-semibold flex items-center"
            >
                <span className="text-main text-xs">
                    {durations.find(d => d.value === days)?.label}
                </span>
                <TiArrowSortedDown className="text-main text-xl mt-0.5" />
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-1 bg-white rounded shadow-md z-50">
                    {durations.map((d) => (
                        <button
                            key={d.value}
                            onClick={() => handleSelect(d.value)}
                            className="block px-4 py-2 text-sm text-main hover:bg-gray-100 w-full text-left"
                        >
                            {d.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
