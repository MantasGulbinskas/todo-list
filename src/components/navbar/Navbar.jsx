import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="wrapper row">
                <div className="search position-relative col-10 col-sm-4 col-xl-2 my-sm-0">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className='position-absolute end-0 top-0 my-1'/>
                </div>
                <div className="items row-cols-12 col-sm-3 mt-4 my-sm-0">

                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>

                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;