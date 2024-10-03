import { useEffect, useState } from "react";

const UserAccounts = ({ user_id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/MyPass/operations.php?getAccounts=${user_id}`)
      .then((response) => response.json())
      .then((account_data) => {
        setData(account_data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container-table">
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>CUENTA</th>
            <th>EMAIL</th>
            <th>CONTRASENA</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((el,index) => {
                    const {title, email, pass} = el;
                    return <tr key={index}>
                            <td>{title}</td>
                            <td>{email}</td>
                            <td>{pass}</td>
                            <td>
                                <button className="btn">Edit</button>
                                <button className="btn">X</button>
                            </td>
                        </tr>
                    
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default UserAccounts;
