import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ProjectionBarChart({ title, chartData, stepSizeY, maxValY, isResponsive = true, isLegend = false, shouldDisplayXGrid = false, fontSizeX = 16, fontSizeY = 14, shouldYBeginAtZero = true }) {
    const options = {
        responsive: isResponsive,
        plugins: {
            legend: { display: isLegend },
            tooltip: {
                callbacks: {
                    label: ctx => {
                        if (ctx.dataset.label === "Projection") {
                            return `Projection: ${ctx.parsed.y + data.datasets[0].data[ctx.dataIndex]}M`;
                        }
                        return `Actual: ${ctx.parsed.y}M`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: shouldDisplayXGrid },
                ticks: {
                    color: "#6b7280", // Tailwind gray-400
                    font: { size: fontSizeX }
                }
            },
            y: {
                beginAtZero: shouldYBeginAtZero,
                max: maxValY,
                ticks: {
                    stepSize: stepSizeY,
                    callback: value => `${value}M`,
                    color: "#9ca3af", // Tailwind gray-400
                    font: { size: fontSizeY }
                },
                grid: {
                    color: "#e5e7eb" // Tailwind gray-200
                }
            }
        }
    };
    return (
        <div className="flex flex-col h-full w-full dark:text-gray-200">
            <div className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">{title}</div>
            <div className="w-full h-full">
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
}