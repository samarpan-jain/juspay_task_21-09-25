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
        <h3 className="text-sm font-semibold mb-2">Activities</h3>
        <ul className="mb-4 relative">
            {activities.map((a, i) => (
                <li key={i} className="flex items-center mb-2 relative">
                    <span className="relative flex flex-col items-center">
                        {a.imgPath ? <img className="w-8 h-8 rounded-full object-cover" src={a.imgPath} alt="Contact Image" /> : <FaUserCircle className="text-xl text-gray-400" />}
                        {i < activities.length - 1 && (
                            <span className="w-px h-6 bg-gray-300 absolute left-1/2 top-full"></span>
                        )}
                    </span>
                    <div className="ml-2 flex flex-col w-[11rem]">
                        <span className="text-sm truncate" title={a.text}>{a.text}</span>
                        <span className="text-xs text-gray-400">{a.time}</span>
                    </div>
                </li>
            ))}
        </ul>
    </>;
}