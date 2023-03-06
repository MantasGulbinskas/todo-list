import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Data_profile} from "../../components/profile/Data_profile";

export const Profile = () => {
  return (
      <div className="d-flex m-auto">
        <Sidebar/>
        <div style={{flex: 12}} >
          <Navbar/>
          <h1>Profile</h1>
            <Data_profile />
        </div>
      </div>
  );
}
