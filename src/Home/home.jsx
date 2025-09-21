import OrderSummary from "./OrderSummary.jsx";
import RevenueSummary from "./RevenueSummary.jsx";
import SalesSummary from "./SalesSummary.jsx";

export default function Home() {
  return (<>
    <h6 className="font-semibold dark:text-gray-300">eCommerce</h6>
    <OrderSummary />
    <RevenueSummary />
    <SalesSummary />
  </>)
}