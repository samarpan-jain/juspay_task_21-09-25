export const tableConfig = [
    {
        label: 'Item Name',
        render: (item) => item?.name,
        sortValue: (item) => item.name
    },
    {
        label: 'Item Quantity',
        render: (item) => item.quantity,
        sortValue: (item) => item.quantity
    },
    {
        label: 'Price',
        render: (item) => item.price,
        sortValue: (item) => item.price
    },
    {
        label: 'Delivery Status',
        render: (item) => <div className="flex items-center gap-2">
            <span className={`px-1 py-1 rounded-full text-white text-xs ${item.status === OrderStatus.Completed ? 'bg-green-500' : item.status === OrderStatus.Cancelled ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
            <span className="text-gray-700 dark:text-gray-300">{item.status.replaceAll("_", " ").toUpperCase()}</span>
        </div>,
    }
]

export const keyFn = (item) => {
    return item.name
}

export const OrderStatus = {
    In_Progress: "in_progress",
    Completed: "completed",
    Cancelled: "cancelled",
}
