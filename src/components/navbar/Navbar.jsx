import {useLocalStorage} from "../../hooks/UseLocalStorage";
import React from "react";

const Navbar = () => {
    const [dataStorage] = useLocalStorage()
    return (
        <nav style={{height: '68px'}} className="border-bottom  ">
            <div className="d-flex align-items-center justify-content-between">
                <div className=" col-8 col-sm-4 col-xl-2 ms-3">
                    <input className='col-10' type="text" placeholder="Search..."/>
                </div>
                <img style={{width: '60px', height: '50px'}}
                     src={dataStorage.photoURL}
                     alt="profile_photo"
                     className="rounded-circle mt-2 me-3"
                />

            </div>

        </nav>
    );
};

export default Navbar;