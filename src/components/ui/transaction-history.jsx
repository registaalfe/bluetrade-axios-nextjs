import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

// Data statis untuk riwayat transaksi
const transactionData = [
    {
        type: 'deposit',
        description: 'Deposit',
        amount: 2500.00,
    },
    {
        type: 'withdrawal',
        description: 'SANDUSDT',
        amount: 500.00,
    },
    {
        type: 'deposit',
        description: 'DOGEUSDT',
        amount: 150.75,
    },
    {
        type: 'withdrawal',
        description: 'FTMUSDT',
        amount: 1200.00,
    },
];

// Sub-komponen untuk setiap baris transaksi
const TransactionRow = ({ type, description, amount }) => {
    const isDeposit = type === 'deposit';

    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);

    return (
        <div className="flex items-center justify-between">
            {/* Ikon dan Deskripsi */}
            <div className="flex items-center space-x-4">
                <div className={`rounded-full p-2 ${isDeposit ? 'bg-emerald-100' : 'bg-red-100'}`}>
                    {isDeposit ? (
                        <FiArrowDown className="text-emerald-500" size={20} />
                    ) : (
                        <FiArrowUp className="text-red-500" size={20} />
                    )}
                </div>
                <span className="font-semibold text-black text-sm">{description}</span>
            </div>

            {/* Jumlah Transaksi */}
            <span
                className={`font-semibold text-sm ${isDeposit ? 'text-emerald-600' : 'text-red-600'
                    }`}
            >
                {isDeposit ? '+' : '-'}{formattedAmount}
            </span>
        </div>
    );
};

// Komponen utama TransactionHistory
export default function TransactionHistory() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-black">History</h2>
                <button className="text-[#00000066] text-sm font-medium outline outline-[#0000001A] rounded-md px-3 py-1">
                    View All
                </button>
            </div>

            {/* Daftar Transaksi */}
            <div className="space-y-4">
                {transactionData.map((tx, index) => (
                    <TransactionRow
                        key={index} // Menggunakan index sebagai key aman untuk daftar statis
                        type={tx.type}
                        description={tx.description}
                        amount={tx.amount}
                    />
                ))}
            </div>
        </div>
    );
}
