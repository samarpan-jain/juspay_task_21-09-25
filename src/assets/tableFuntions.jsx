import { GoArrowDown, GoArrowUp } from "react-icons/go"

export const getSortIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div> <GoArrowUp /><GoArrowDown /> </div>
    }
    if (sortOrder == null) {
        return <div> <GoArrowUp /><GoArrowDown /> </div>
    }
    else if (sortOrder === 'asc') {
        return <div> <GoArrowUp /> </div>
    }
    else if (sortOrder === 'desc') {
        return <div> <GoArrowDown /> </div>
    }
}