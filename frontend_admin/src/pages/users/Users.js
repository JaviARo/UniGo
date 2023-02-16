import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import authHeader from "../../services/auth-header";
import "../styles.css";

const endpoint = "http://localhost:8000/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios({
      url: `${endpoint}/users`,
      method: "GET",
      headers: authHeader(),
    })
    setUsers(response.data);
  };

  return (
    <div>
      <Header />
      <div id="adminBackground">
        <h1>Usuarios</h1>
        <table>
          <thead>
            <tr>
              <th>Dni</th>
              <th>Nombre</th>
              <th>Nombre de usuario</th>
              <th>Correo electrónico</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.dni}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users