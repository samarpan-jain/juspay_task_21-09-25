import { projectionChartData } from "../assets/projectionChartData.js";
import ProjectionBarChart from "../components/shared/ProjectionBarChart.jsx";
import StatCard from "../components/shared/StatCard.jsx";

export default function OrderSummary() {
    const stats = [
        { title: "Customers", value: "3,781", change: "+11.01%", positive: true, bgClass: "bg-blue-50" },
        { title: "Orders", value: "1,219", change: "-0.03%", positive: false, bgClass: "bg-gray-50" },
        { title: "Revenue", value: "$695", change: "+15.03%", positive: true, bgClass: "bg-gray-50" },
        { title: "Growth", value: "30.1%", change: "+6.08%", positive: true, bgClass: "bg-gray-100" }
    ];

    return <div className="flex gap-6 mt-4">
        {/* StatCards Section */}
        <div className="w-full flex">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
                {stats.map((s, i) => (
                    <StatCard
                        key={i}
                        title={s.title}
                        value={s.value}
                        change={s.change}
                        positive={s.positive}
                        bgClass={s.bgClass}
                    />
                ))}
            </div>
        </div>
        {/* Projection Chart Section */}
        <div className="w-1/2 flex">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl pt-6 px-5 pb-2 w-full h-full flex flex-col items-center">
                <ProjectionBarChart
                    chartData={projectionChartData}
                    title={"Projections vs Actuals"}
                    stepSizeY={10}
                    maxValY={30}
                />
            </div>
        </div>
    </div>;
}