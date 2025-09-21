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

import { useTheme } from "../../contexts/theme";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LineChart({ chartData, stepSizeY, maxValY, isResponsive = true, isLegend = false, shouldDisplayXGrid = false, fontSizeX = 16, fontSizeY = 14, shouldYBeginAtZero = true }) {
    const { theme } = useTheme()
    const isDarkMode = theme === 'dark';
    const axisColor = isDarkMode ? "#9ca3af" : "#6b7280"; // gray-400
    const gridColor = isDarkMode ? "#4b5563" : "#e5e7eb"; // gray-600 vs gray-200

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
                grid: {
                    display: shouldDisplayXGrid,
                    color: gridColor
                },
                ticks: {
                    color: axisColor,
                    font: { size: fontSizeX }
                }
            },
            y: {
                beginAtZero: shouldYBeginAtZero,
                max: maxValY,
                ticks: {
                    stepSize: stepSizeY,
                    callback: value => `${value}M`,
                    color: axisColor,
                    font: { size: fontSizeY }
                },
                grid: {
                    color: gridColor
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