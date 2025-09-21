import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineChart({ chartData, stepSizeY, maxValY, isResponsive = true, isLegend = false, shouldDisplayXGrid = false, fontSizeX = 16, fontSizeY = 14, shouldYBeginAtZero = true }) {
    const options = {
        responsive: isResponsive,
        plugins: {
            legend: { display: isLegend },
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}M`
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
        <div className="flex w-full h-full pb-4">
            <Line data={chartData} options={options} />
        </div>
    );
}