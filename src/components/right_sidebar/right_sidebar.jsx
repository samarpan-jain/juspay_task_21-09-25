import Activities from "./activities.jsx";
import Contacts from "./contacts.jsx";
import Notifications from "./notifications.jsx";

const RightSidebar = () => (
    <div>
        <Notifications />
        <Activities />
        <Contacts />
    </div>
);

export default RightSidebar;