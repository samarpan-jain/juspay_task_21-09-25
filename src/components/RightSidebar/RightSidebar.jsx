import Activities from "./Activities.jsx";
import Contacts from "./Contacts.jsx";
import Notifications from "./Notifications.jsx";

const RightSidebar = () => (
    <div>
        <Notifications />
        <Activities />
        <Contacts />
    </div>
);

export default RightSidebar;