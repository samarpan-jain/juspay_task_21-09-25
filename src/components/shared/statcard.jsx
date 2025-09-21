import { FiTrendingUp } from "react-icons/fi";

export default function StatCard({ title, value, change, positive, bgClass }) {
  return (
    <div className={`${bgClass} rounded-2xl p-2 flex flex-col justify-between flex-1`}>
      <div className="font-medium text-base mb-2 hover:bg-gray-300 rounded px-1 cursor-pointer">{title}</div>
      <div className="flex justify-between w-full h-full items-center hover:bg-gray-300 hover:rounded hover:px-1 hover:cursor-pointer hover:flex-row-reverse">
        <span className="text-2xl font-semibold">{value}</span>
        <span className="flex text-sm font-medium">
          {change}
          <FiTrendingUp className={`ml-1 ${positive ? "" : "rotate-180"}`} />
        </span>
      </div>
    </div>
  );
}