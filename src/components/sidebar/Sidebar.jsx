import './sidebar.scss'
import {Link} from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {SignOut} from "../SignOut";
 const Sidebar = () => {
    return (
        <div className="sidebar ">
            <div className="top ms-3">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">admin panel</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>
                        <li>
                            <PersonOutlineIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to='/tasks' style={{textDecoration: 'none'}} >
                        <li>
                            <AssignmentIndIcon className='icon' />
                            <span>Task List</span>
                        </li>
                    </Link>

                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>

                    <li>
                        <ExitToAppIcon className="icon" />
                        <SignOut />
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar
