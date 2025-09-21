import OrderSummary from "./order_summary.jsx";
import RevenueSummary from "./revenue_summary.jsx";
import SalesSummary from "./sales_summary.jsx";

export default function Home() {
  return (<>
    <h6 className="font-semibold dark:text-gray-300">eCommerce</h6>
    <OrderSummary />
    <RevenueSummary />
    <SalesSummary />
  </>)
}