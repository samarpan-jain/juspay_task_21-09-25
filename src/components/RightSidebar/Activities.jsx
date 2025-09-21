import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Activities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('/src/assets/activityData.json')
            .then(response => response.json())
            .then(data => setActivities(data))
            .catch(error => console.error('Error fetching activity data:', error));
    }, []);

    return <>
        <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">Activities</h3>
        <ul className="mb-4 relative">
            {activities.map((a, i) => (
                <li key={i} className="flex items-center mb-2 relative">
                    <span className="relative flex flex-col items-center">
                        {a.imgPath ? <img className="w-8 h-8 rounded-full object-cover" src={a.imgPath} alt="Contact Image" /> : <FaUserCircle className="text-xl text-gray-400 dark:text-gray-600" />}
                        {i < activities.length - 1 && (
                            <span className="w-px h-6 absolute left-1/2 top-full bg-gray-300 dark:bg-gray-700"></span>
                        )}
                    </span>
                    <div className="ml-2 flex flex-col w-[11rem]">
                        <span className="text-sm truncate text-gray-800 dark:text-gray-200" title={a.text}>{a.text}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{a.time}</span>
                    </div>
                </li>
            ))}
        </ul>
    </>;
}