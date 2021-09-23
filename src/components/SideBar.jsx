import { FaHome, FaFileAlt, FaFolderMinus, FaImage, FaNewspaper, FaEnvelope, FaEdit, FaBars, FaUsers, FaCog } from "react-icons/fa";
import Logo from '../../src/image/Group.svg';

export function SideBar() {
    return (
        <nav className="sidebar">
            <div className="logo">
                <img src={Logo} alt="avatar" />
                <span className="text" >Enterprise         <span className="text1">Dashboard</span></span>
            </div>
            <div className="title" style={{ borderTop: '1px solid #1971f8', marginTop: '8px' }}>
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


