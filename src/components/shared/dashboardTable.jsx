export default function DashboardTable({ title, columns, data }) {
    return (<div className="flex flex-col w-full bg-gray-50 rounded-2xl p-6 min-h-[350px]">
        {title && <div className="font-semibold text-lg mb-4">{title}</div>}
        <div className="flex w-full overflow-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-gray-200">
                        {columns.map(col => (
                            <th key={col.key} className="py-2 px-2 text-gray-400 font-medium">{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data && data.length>0 && data.map((row, idx) => (
                        <tr key={idx} className="text-sm hover:bg-gray-100">
                            {columns.map(col => (
                                <td key={col.key} className="py-3 px-2 text-gray-700">{row[col.key]}</td>
                            ))}
                        </tr>
                    ))}
                    {(!data || data.length === 0) && (
                        <tr>
                            <td colSpan={columns.length} className="text-center text-gray-500 py-10">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>)
}