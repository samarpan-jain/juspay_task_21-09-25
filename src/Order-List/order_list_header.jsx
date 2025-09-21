import { IoFilter } from "react-icons/io5";

export default function OrderListHeader({ handleFilterChange, filterStatus, searchText, handleSearchChange }) {
    return (<div className="flex flex-row">
        <IoFilter className="text-gray-500 dark:text-gray-400 mt-1 mr-2" size={20} />
        <select title="Filter By Status" placeholder="Select a status to filter" value={filterStatus} onChange={(e) => { handleFilterChange(e.target.value) }} className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <option value={"all"}>All Status</option>
            <option value={"in_progress"}>In Progress</option>
            <option value={"completed"}>Completed</option>
            <option value={"cancelled"}>Cancelled</option>
        </select>
        <div className="ml-auto">
            <input type="text" value={searchText} onChange={(e)=>{handleSearchChange(e.target.value.trim())}} placeholder="Search orders list..." className="border border-gray-300 dark:border-gray-600 rounded px-4 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300" />
        </div>
    </div>)
}