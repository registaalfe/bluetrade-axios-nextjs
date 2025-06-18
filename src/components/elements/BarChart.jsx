'use client'; // For Next.js App Router

import { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts/highstock'; //

export default function BarChart() {
    const chartRef = useRef(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json');
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (data.length && chartRef.current) {
            Highcharts.stockChart(chartRef.current, {
                chart: {
                    spacing: [10, 0, 0, 0],
                },
                rangeSelector: {
                    enabled: false,
                },
                navigator: {
                    enabled: false,
                },
                scrollbar: {
                    enabled: false,
                },
                title: {
                    text: null,
                },
                yAxis: {
                    labels: {
                        enabled: false,
                    },
                    gridLineWidth: 0,
                },
                xAxis: {
                    lineWidth: 0, // Removes the axis line
                    tickWidth: 0, // Removes the tick marks on the axis
                },
                legend: {
                    enabled: false,
                },
                tooltip: {
                    split: false,
                    shared: true,
                },
                plotOptions: {
                    candlestick: {
                        color: '#3B82F6',      // Tailwind blue-500 (down candle)
                        upColor: '#93C5FD',   // Tailwind blue-300 (up candle)
                        lineColor: '#3B82F6',
                        upLineColor: '#93C5FD',
                    }
                },
                series: [{
                    type: 'candlestick',
                    name: 'BTCUSDT',
                    data: data,
                    upColor: '#93C5FD',        // Tailwind blue-300 (up candle)
                    color: '#3B82F6',           // Tailwind blue-500 (down candle)
                    lineColor: '#3B82F6',       // Outline for down candles
                    upLineColor: '#93C5FD',     // Outline for up candles
                    pointWidth: 6,              // Optional: control bar thickness
                    dataGrouping: {
                        units: [
                            ['day', [1]],
                            ['week', [1]],
                            ['month', [1]]
                        ]
                    }
                }]

            });
        }
    }, [data]);

    return (
        <div className="flex-auto p-3">
            <div className="relative h-[250px] w-full">
                {/* Chart container */}
                <div ref={chartRef} className="w-full h-full" />
            </div>
        </div>
    );
};
