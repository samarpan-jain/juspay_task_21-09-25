import DashboardTable from "../components/shared/dashboardtable.jsx";
import { useEffect, useState } from "react";
import DoughnutChart from "../components/shared/doughnutchart.jsx";

export default function SalesSummary() {
    const sellingProductsColumns = [
        { key: "name", header: "Name" },
        { key: "price", header: "Price" },
        { key: "quantity", header: "Quantity" },
        { key: "amount", header: "Amount" },
    ];

    const [sellingProductsData, setSellingProductsData] = useState([]);
    const [totalSalesData, setTotalSalesData] = useState([]);

    useEffect(() => {
        fetch("/selling_product_table_data.json")
            .then((response) => response.json())
            .then((data) => setSellingProductsData(data))
            .catch((error) => console.error("Error fetching data:", error));

        fetch("/total_sales_chart_data.json")
            .then((response) => response.json())
            .then((data) => setTotalSalesData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return <div className="mt-6 flex flex-row gap-6">
        <div className="w-full flex">
            <DashboardTable title={"Top Selling Products"} columns={sellingProductsColumns} data={sellingProductsData} />
        </div>
        <div className="flex w-1/2">
            <DoughnutChart title={"Total Sales"} data={totalSalesData} />
        </div>
    </div>;
}