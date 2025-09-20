import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('/src/assets/contactsData.json')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contact data:', error));
    }, []);

    return <>
        <h3 className="text-sm font-semibold mb-2">Contacts</h3>
        <ul>
            {contacts.map((c, i) => (
                <li key={i} className="flex items-center mb-2 py-1">
                    {c.imgPath ? <img className="w-8 h-8 rounded-full object-cover" src={c.imgPath} alt="Contact Image" /> : <FaUserCircle className="text-xl text-gray-400" />}
                    <span className="ml-2 text-sm" title={c.name}>{c.name}</span>
                </li>
            ))}
        </ul>
    </>;
}