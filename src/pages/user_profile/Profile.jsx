import React from 'react';
import {ChangeProfile} from "../../components/profile/ChangeProfile";
import {Layout} from "../Layout";

export const Profile = () => {
  return (
    <Layout>
          <h1>Profile</h1>
        <div>
            <ChangeProfile />
        </div>
    </Layout>


  );
}
