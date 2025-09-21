import { useEffect, useState } from "react";
import Table from "../components/shared/table.jsx";
import { tableConfig, keyFn } from "./order_table.config.jsx";
import OrderListHeader from "./order_list_header.jsx";

export default function OrderList() {

  const [orderListData, setOrderListData] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("/order_list.json")
      .then((response) => response.json())
      .then((data) => {
        setOrderListData(data)
        setRenderList(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (filterStatus && filterStatus !== "all") {
      const filteredData = orderListData.filter(item => item.status === filterStatus);
      setRenderList(filteredData);
    }
    else {
      setRenderList(orderListData);
    }
  }, [filterStatus])

  useEffect(() => {
    if (searchText && searchText !== "") {
      const results = orderListData.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setRenderList(results);
    }
    else {
      setRenderList(orderListData);
    }
  }, [searchText])

  function handleFilterChange(filterVal) {
    setFilterStatus(filterVal);
  }

  function handleSearchChange(searchVal) {
    setSearchText(searchVal);
  }

  return (<div className="flex flex-col">
    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
      Order List
    </h4>
    <div className="flex flex-col w-full mt-4">
      <OrderListHeader handleFilterChange={handleFilterChange} filterStatus={filterStatus} handleSearchChange={handleSearchChange} searchText={searchText} />
      <div className="overflow-x-auto mt-4 flex flex-col w-full">
        {orderListData && orderListData.length > 0 && <Table tableConfig={tableConfig} tableData={renderList} keyFn={keyFn} />}
      </div>
    </div>
  </div>)
}