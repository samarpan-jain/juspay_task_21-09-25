import { notifications } from "../../assets/notificationsData.js";

export default function Notifications() {
    return <>
        <h3 className="text-sm font-semibold mb-2">Notifications</h3>
        <ul className="mb-4">
            {notifications.map((n, i) => (
                <li key={i} className=" mb-2">
                    <div className="flex items-center">
                        <span className="text-2xl">{<n.icon className={n.iconClassName} />}</span>
                        <div className="ml-2 flex flex-col w-[11rem]">
                            <span className="text-sm truncate" title={n.text}>{n.text}</span>
                            <span className="text-xs text-gray-400">{n.time}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </>;
}