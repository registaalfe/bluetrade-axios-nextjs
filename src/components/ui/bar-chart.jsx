'use client'; // For Next.js App Router

import { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts/highstock'; //

export default function BarChart() {
    // useRef to get a reference to the chart container DOM element
    const chartRef = useRef(null);

    // useState to hold the chart data fetched from the API
    const [data, setData] = useState([]);

    // useEffect for fetching data once when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch sample data from the Highcharts demo endpoint
                const res = await fetch('https://demo-live-data.highcharts.com/aapl-ohlc.json');
                const jsonData = await res.json();

                // Update the state with the fetched data
                setData(jsonData);
            } catch (error) {
                // Log any errors during the fetch operation
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once

    // Initializing and rendering the chart when data is available
    useEffect(() => {
        // Guard clause: Do not run on the server, and only proceed if data is available and the ref is attached
        if (typeof window === 'undefined') return;

        if (data.length && chartRef.current) {
            // Initialize the Highcharts stock chart with the specified configuration
            Highcharts.stockChart(chartRef.current, {

                // --- CHART STYLING & LAYOUT ---
                chart: {
                    spacing: [10, 0, 0, 0], // Internal padding: [top, right, bottom, left]
                },

                // --- UI ELEMENT CONFIGURATION (MOSTLY DISABLED) ---
                rangeSelector: {
                    enabled: false, // Disable the date range selector
                },
                navigator: {
                    enabled: false, // Disable the bottom navigation preview chart
                },
                scrollbar: {
                    enabled: false, // Disable the scrollbar
                },
                title: {
                    text: null, // Remove the main chart title
                },
                legend: {
                    enabled: false, // Hide the chart legend
                },

                // --- AXIS CONFIGURATION ---
                yAxis: {
                    labels: {
                        enabled: false, // Hide Y-axis (price) labels
                    },
                    gridLineWidth: 0, // Remove horizontal grid lines
                },
                xAxis: {
                    lineWidth: 0, // Removes the main horizontal axis line
                    tickWidth: 0, // Removes the tick marks on the axis
                },

                // --- TOOLTIP ---
                tooltip: {
                    split: false, // Show a single, unified tooltip on hover
                    shared: true,
                },

                // --- SERIES PLOT OPTIONS ---
                plotOptions: {
                    candlestick: {
                        color: '#3B82F6',      // Color for down candles (price decrease)
                        upColor: '#93C5FD',    // Color for up candles (price increase)
                        lineColor: '#3B82F6',  // Wick color for down candles
                        upLineColor: '#93C5FD',// Wick color for up candles
                    }
                },

                // --- DATA SERIES ---
                series: [{
                    type: 'candlestick',
                    name: 'BTCUSDT', // Series name for the tooltip
                    data: data,      // The OHLC data array
                    pointWidth: 6,   // Thickness of the candlestick bodies in pixels
                    dataGrouping: {  // How to aggregate data on different zoom levels
                        units: [
                            ['day', [1]],
                            ['week', [1]],
                            ['month', [1]]
                        ]
                    }
                }]
            });
        }
    }, [data]); // This effect depends on the 'data' state

    return (
        <div className="p-3">
            <div className="relative h-[250px] w-full">
                {/* This div is the container where the Highchart will be rendered */}
                <div ref={chartRef} className="w-full h-full" />
            </div>
        </div>
    );
};
