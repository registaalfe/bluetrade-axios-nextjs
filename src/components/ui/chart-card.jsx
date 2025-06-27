import React from "react";
import LineChart from "./line-chart";

export default function ChartCard({ title, symbol, price, pnl, chartData }) {
    return (
        <div className="card border rounded-lg shadow-sm p-4 text-center bg-white">
            <h3 className="text-sm font-bold">{symbol}</h3>
            <p className="text-xs text-gray-500">{title}</p>

            <LineChart data={chartData} chartId={`chart-${symbol}`} />

            <p className="text-xl font-semibold">${price}</p>
            <p className="text-sm">
                PNL Daily{" "}
                <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded">
                    +{pnl}%
                </span>
            </p>
        </div>
    );
}
