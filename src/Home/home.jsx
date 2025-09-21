import OrderSummary from "./OrderSummary";
import RevenueSummary from "./RevenueSummary";
import SalesSummary from "./SalesSummary";

export default function Home() {
  return (<>
    <h6 className="font-semibold dark:text-gray-300">eCommerce</h6>
    <OrderSummary/>
    <RevenueSummary/>
    <SalesSummary/>
  </>)
}