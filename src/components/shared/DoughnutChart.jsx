import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ title, data }) {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [
            {
                data: data.map(d => d.value),
                backgroundColor: data.map(d => d.color),
                borderWidth: 0,
                cutout: "70%",
            }
        ]
    };

    const chartOptions = {
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        const label = context.label || "";
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percent = ((value / total) * 100).toFixed(1);
                        return `${label}: $${value} (${percent}%)`;
                    }
                }
            }
        }
    };
    return (<div className="bg-gray-50 rounded-2xl p-6 w-full flex flex-col items-center">
        <div className="font-semibold text-lg mb-4">{title}</div>
        <div className="relative flex justify-center items-center mb-4 w-36 h-36">
            <Doughnut data={chartData} options={chartOptions} />
        </div>
        <div className="w-full flex flex-col gap-2">
            {data.map((d) => (
                <div
                    key={d.label}
                    className={`flex items-center justify-between p-2 hover:bg-gray-200 rounded cursor-pointer`}
                >
                    <span className="flex items-center">
                        <span className={`w-3 h-3 rounded-full ${d.dot} inline-block mr-2`} />
                        <span className="text-gray-700">{d.label}</span>
                    </span>
                    <span className="font-semibold text-gray-700">${d.value.toFixed(2)}</span>
                </div>
            ))}
        </div>
    </div>);
}           