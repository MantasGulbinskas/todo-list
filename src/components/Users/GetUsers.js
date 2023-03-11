import React from 'react';
import GetUsersHooks from "../../hooks/GetUsersHooks";
import {Loading} from "../loading/Loading";

export const GetUsers = () => {
  const [data, loading, error ] = GetUsersHooks()
  return (
      <>
        <div className='d-flex flex-column'>
          <h1>Users</h1>
          {loading && <Loading/>}
          <table className="table">
            <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Username</th>
              <th scope='col'>Name</th>
              <th scope='col'>Lastname</th>
              <th scope='col'>Id</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((users, index) => (
                <tr key={users.id}>
                  <td>{index +1}</td>
                  <td>{users.username}</td>
                  <td>{users.name}</td>
                  <td>{users.lastname}</td>
                  <td>{users.id}</td>
                </tr>
            ))}
            {(!loading && (!data || data.length === 0)) && (
                <tr>
                  <td colSpan='5'>No users found.
                  <p>Some reason: <strong className='text-danger'>{error}</strong></p>
                  </td>
                </tr>
            )}
            </tbody>
          </table>
        </div>
      </>
  );
}
