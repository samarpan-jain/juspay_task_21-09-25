import LineChart from "../components/shared/linechart.jsx";
import RevenueByLocation from "../components/revenuebylocation.jsx";
import { revenueLineChartData } from "../assets/revenue_line_chart_data.js";

export default function RevenueSummary() {
    {/* Line Chart Section */ }
    return <div className="flex flex-row gap-6 mt-4 h-[400px]">
        <div className="w-[65%] bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center mb-2">
                <div className="font-semibold text-base mb-2 text-gray-900 dark:text-white">Revenue</div>
                <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
                <span className="flex items-center mr-6">
                    <span className="w-3 h-3 rounded-full bg-black dark:bg-white inline-block mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Current Week</span>
                    <span className="font-semibold ml-1 text-gray-900 dark:text-white">$58,211</span>
                </span>
                <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-300 dark:bg-blue-500 inline-block mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Previous Week</span>
                    <span className="font-semibold ml-1 text-gray-900 dark:text-white">$68,768</span>
                </span>
            </div>
            <LineChart chartData={revenueLineChartData} stepSizeY={10} maxValY={30} />
        </div>
        {/* Revenue by Location Section */}
        <div className="flex"> <RevenueByLocation /> </div>
    </div>;
}