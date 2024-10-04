import { useEffect, useState } from "react";

const UserAccounts = ({ data, deleteItem }) => {
  return (
    <div className="table-responsive-sm table-container">
      <table className="table">
        <thead>
          <tr>
            <th>CUENTA</th>
            <th>EMAIL</th>
            <th>CONTRASENA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => {
            const { account_id, title, email, pass } = el;
            return (
              <tr key={index}>
                <td>{title}</td>
                <td>{email}</td>
                <td>{pass}</td>
                <td className="btn-group btn-group-sm">
                  <button className="btn btn-warning">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(account_id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserAccounts;
