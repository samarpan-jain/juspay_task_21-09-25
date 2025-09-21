import { defaultData } from "../assets/projectionChartData";
import LineChart from "../components/shared/LineChart";
import ProjectionBarChart from "../components/shared/ProjectionBarChart";
import StatCard from "../components/shared/StatCard";
import { lineChartData } from "../assets/lineChartData";
import RevenueByLocation from "../components/RevenueByLocation";
import DashboardTable from "../components/shared/dashboardTable";
import { useEffect, useState } from "react";
import DoughnutChart from "../components/shared/DoughnutChart";

export default function Home() {
  const sellingProductsColumns = [
    { key: "name", header: "Name" },
    { key: "price", header: "Price" },
    { key: "quantity", header: "Quantity" },
    { key: "amount", header: "Amount" },
  ];

  const [sellingProductsData, setSellingProductsData] = useState([]);
  const [totalSalesData, setTotalSalesData] = useState([]);

  useEffect(() => { 
    fetch("/src/assets/sellingProductTableData.json")
      .then((response) => response.json())
      .then((data) => setSellingProductsData(data))
      .catch((error) => console.error("Error fetching data:", error));
    
    fetch("/src/assets/totalSalesChartData.json")
      .then((response) => response.json())
      .then((data) => setTotalSalesData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (<div>
    <h6 className="font-semibold">eCommerce</h6>
    <div className="flex gap-6 mt-4">
        {/* StatCards Section */}
        <div className="w-full flex">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
            <StatCard
              title="Customers"
              value="3,781"
              change="+11.01%"
              positive={true}
              bgClass="bg-blue-50"
            />
            <StatCard
              title="Orders"
              value="1,219"
              change="-0.03%"
              positive={false}
              bgClass="bg-gray-50"
            />
            <StatCard
              title="Revenue"
              value="$695"
              change="+15.03%"
              positive={true}
              bgClass="bg-gray-50"
            />
            <StatCard
              title="Growth"
              value="30.1%"
              change="+6.08%"
              positive={true}
              bgClass="bg-gray-200"
            />
          </div>
        </div>
        {/* Projection Chart Section */}
        <div className="w-1/2 flex">
          <div className="bg-gray-50 rounded-2xl pt-6 px-5 pb-2 w-full h-full flex flex-col items-center">
            <ProjectionBarChart
              chartData={defaultData}
              title={"Projections vs Actuals"}
              stepSizeY={10}
              maxValY={30}
            />
          </div>
        </div>
      </div>
    <div className="flex flex-row gap-6 mt-4 h-[400px]">
      <div className="w-[65%] bg-gray-50 rounded-2xl p-6 flex flex-col">
        <div className="flex items-center mb-2">
          <div className="font-semibold text-base mb-2">Revenue</div>
          <span className="mx-2 text-gray-300">|</span>
          <span className="flex items-center mr-6">
            <span className="w-3 h-3 rounded-full bg-black inline-block mr-2" />
            <span className="text-gray-700 text-sm">Current Week</span>
            <span className="font-semibold ml-1">$58,211</span>
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-300 inline-block mr-2" />
            <span className="text-gray-700 text-sm">Previous Week</span>
            <span className="font-semibold ml-1">$68,768</span>
          </span>
        </div>
        <LineChart chartData={lineChartData} stepSizeY={10} maxValY={30} />
      </div>
      <div className="flex"> <RevenueByLocation /> </div>
    </div>
    <div className="mt-6 flex flex-row gap-6">
      <div className="w-full flex">
        <DashboardTable title={"Top Selling Products"} columns={sellingProductsColumns} data={sellingProductsData}/>
      </div>
      <div className="flex w-1/2">
        <DoughnutChart title={"Total Sales"} data={totalSalesData}/>
      </div>
    </div>
  </div>)
}