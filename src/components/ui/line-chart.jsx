"use client";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Registering Chart.js components is still necessary
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function LineChart({ data = [] }) {
    const labels = data.map((_, i) => i + 1);
    // Chart.js data configuration remains the same
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Price',
                data,
                borderColor: '#f6ad55', // An orange color similar to the image
                backgroundColor: 'transparent',
                borderWidth: 3, // Made the line slightly thicker
                tension: 0.4, // This makes the line curvy
                pointRadius: 0, // Hides the points on the line
            },
        ],
    };

    // Chart.js options configuration remains the same
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hides the legend
            },
            tooltip: {
                enabled: false, // Disables tooltips
            },
        },
        scales: {
            x: {
                display: false, // Hides the x-axis
            },
            y: {
                display: false, // Hides the y-axis
            },
        },
        elements: {
            line: {
                borderCapStyle: 'round',
            },
        },
    };

    return (
        // The container is now simpler, just holding the chart
        <div className="bg-white p-2 w-full max-w-sm h-28">
            <Line options={chartOptions} data={chartData} />
        </div>
    );
}
