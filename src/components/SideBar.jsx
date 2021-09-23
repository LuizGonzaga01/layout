import { FaHome, FaFileAlt, FaFolderMinus, FaImage, FaNewspaper, FaEnvelope, FaEdit, FaBars, FaUsers, FaCog } from "react-icons/fa";

export function SideBar() {
    return (
        <nav className="sidebar">
            <span>Enterprise</span>
            <div className="title">
            </div>
            <navbar className="navbar">
                <li ><span><FaHome />   </span>Dashboard</li>
                <li ><span><FaFileAlt />   </span>Posts</li>
                <li ><span><FaFolderMinus />   </span>Categories</li>
                <li ><span><FaImage />   </span>Media</li>
                <li ><span><FaNewspaper />   </span>Pages</li>
                <li ><span><FaEnvelope />   </span>Comments</li>
                <li ><span><FaEdit />   </span>Appearance</li>
                <li ><span><FaBars />   </span>extentions</li>
                <li ><span><FaUsers />   </span>Users</li>
                <li ><span><FaCog />   </span>Settings</li>
            </navbar>
        </nav>
    )
}


