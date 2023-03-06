import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {DataProfile} from "../../components/profile/DataProfile";

export const Profile = () => {
  return (
      <div className="d-flex m-auto">
        <Sidebar/>
        <div style={{flex: 12}} >
          <Navbar/>
          <h1>Profile</h1>
            <DataProfile />
        </div>
      </div>
  );
}
