import React from 'react';
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

export const Layout = ({children}) => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-md-3 col-lg-2 col-4 p-0">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-lg-10 col-8 p-0">
                    <Navbar />
                    <div className="m-3 d-flex">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
