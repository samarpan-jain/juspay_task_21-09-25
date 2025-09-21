import { useState, useEffect } from "react"
import { useCommonFunc } from "../../hooks/useCommonFunc.js";
import { getSortIcons } from "../../assets/table_funtions.jsx";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Table({ tableData, tableConfig, keyFn }) {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [renderData, setRenderData] = useState(tableData);
    const [sortData] = useCommonFunc();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = tableData.slice(startIndex, endIndex);

    useEffect(() => {
        if (tableConfig.find(column => column.sortValue !== undefined)) {
            const column = tableConfig.find(column => column.label === sortBy);
            const sortedData  = sortData(tableData,column,sortOrder);
            setRenderData(sortedData)
        }
    }, [sortBy, sortData, sortOrder, tableConfig, tableData])

    useEffect(() => {
        if (sortBy && sortOrder) {
            const column = tableConfig.find(column => column.label === sortBy);
            const sortedData  = sortData(tableData,column,sortOrder);
            setRenderData(sortedData.slice(startIndex, endIndex))
        }
        else {
            setRenderData(paginatedData)
        }
    }, [page, rowsPerPage]);

    const setSortData = (label) => {
        if (sortBy !== label) {
            setSortOrder('asc');
            setSortBy(label);
            return
        }
        if (sortOrder == null) {
            setSortOrder('asc');
        }
        else if (sortOrder === 'asc') {
            setSortOrder('desc');
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null)
        }
    }

    const headers = tableConfig.map(column =>
        <th className="p-3 cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:text-black" key={column.label} onClick={column.sortValue ? () => setSortData(column.label) : null}>
            <div className="flex items-center">
                {column.sortValue && getSortIcons(column.label, sortBy, sortOrder)}{column.label}
            </div>
        </th>
    )

    const rows = renderData.map((rowData) => {
        const cells = tableConfig.map(
            column => <td className="p-3 dark:text-white" key={column.label}>{column.render(rowData)}</td>
        )
        return <tr className="border-b" key={keyFn(rowData)}>{cells}</tr>
    })


    return <>
    <table className="w-full table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {headers}
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    <div className="flex flex-row w-full gap-4 items-center mt-2 bg-gray-50 dark:bg-gray-700 p-2 rounded">
        <select onChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }} value={rowsPerPage} className="border border-gray-300 dark:border-gray-600 rounded px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
        </select>
        <button onClick={() => setPage(page - 1)} disabled={page === 0} className="dark:text-white cursor-pointer"><MdOutlineKeyboardArrowLeft/></button>
        <span className="dark:text-white">Page {page + 1} of {Math.ceil(tableData.length / rowsPerPage)}</span>
        <button className="dark:text-white cursor-pointer" onClick={() => setPage(page + 1)} disabled={page === Math.ceil(tableData.length / rowsPerPage) - 1}><MdKeyboardArrowRight/></button>
    </div>
    </>
}

export default Table