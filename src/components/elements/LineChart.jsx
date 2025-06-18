import { useEffect, useRef } from "react";
import Chart from "chart.js";

/**
 * LineChart Component
 * 
 * @param {Array} data - The dataset to plot (e.g. [65, 67, 66, 69])
 * @param {string} chartId - Unique ID for each chart (e.g. "chart-BTC")
 */
export default function LineChart({ data, chartId }) {
    // useRef gives us a reference to the <canvas> element
    const chartRef = useRef(null);

    useEffect(() => {
        // Get canvas context safely using useRef
        const ctx = chartRef.current.getContext("2d");

        // Create the chart
        const chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr"],
                datasets: [
                    {
                        label: "Performance",
                        backgroundColor: "#3182ce",
                        borderColor: "#3182ce",
                        data: data,
                        fill: false,
                        pointRadius: 0,
                        pointHoverRadius: 0,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                layout: { padding: 0 },
                legend: { display: false },
                title: { display: false },
                scales: {
                    xAxes: [{ display: false, gridLines: { display: false } }],
                    yAxes: [{ display: false, gridLines: { display: false } }],
                },
            },
        });

        // Clean up chart when component unmounts
        return () => chart.destroy();
    }, [data]);

    return (
        <div className="flex-auto p-3">
            <div className="relative h-16">
                {/* Attach useRef to canvas */}
                <canvas ref={chartRef} id={chartId}></canvas>
            </div>
        </div>
    );
}
