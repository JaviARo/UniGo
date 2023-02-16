import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import authHeader from "../../services/auth-header";
import authService from "../../services/auth.service";
import "../styles.css";

const endpoint = "http://localhost:8000/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const userId = authService.userId();
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

  const deleteThisUser = async (id) => {
    if (window.confirm('¿Quieres borrar el usuario?')) {
      await axios({
        url: `${endpoint}/user/${id}`,
        method: "DELETE",
        headers: authHeader(),
      })
      window.location.reload()
    }
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
              <th>Tipo</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.dni}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {user.type==="a" ? (
                  <td>Administrador</td>
                ) : (
                  <td>Cliente</td>
                )}
                {user.id===userId ? (
                  <td></td>
                ) : (
                  <td>
                    <img
                      className="deleteImg"
                      src="/img/delete.png"
                      onClick={() => deleteThisUser(user.id)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users