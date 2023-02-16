import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./userContent.css";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const endpoint = "http://localhost:8000/api";

function UserContent() {
  const userId = AuthService.userId();
  const [user, setUser] = useState("");
  const [show, setShow] = useState(true);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    console.log(authHeader());
    const response = await axios({
      url: `${endpoint}/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    console.log(response);
    setUser(response.data);
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios({
      url: `${endpoint}/user/${userId}`,
      method: "PUT",
      headers: authHeader(),
      data: {username, name, dni, email}
    })
  }

  function changeUserContent() {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const navigate = useNavigate();
  const navigateToConfig = () => {
    navigate("/config");
  }

  return (
    <div id="userContentHeight">
      {show ? (
        <div id="userContentBackground">
          <div id="userData">
            <h2 id="username">{user.username}</h2>
            <div className="userAttribute">
              <h3 className="userLabel">Nombre:</h3>
              <h3 className="userInput">{user.name}</h3>
            </div>
            <div className="userAttribute">
              <h3 className="userLabel">DNI/CIF:</h3>
              <h3 className="userInput">{user.dni}</h3>
            </div>
            <div className="userAttribute">
              <h3 className="userLabel">Correo electrónico:</h3>
              <h3 className="userInput">{user.email}</h3>
            </div>
          </div>
          <div id="userButtons">
            <button className="userButton" onClick={changeUserContent}>Editar perfil</button>
            <button className="userButton" onClick={navigateToConfig}>Volver</button>
          </div>
        </div>
      ) : (
        <div id="userContentBackground">
          <form onSubmit={updateUser}>
            <div id="userFormContainer">
              <div id="userData">
                <input
                  id="username"
                  type="text"
                  placeholder={user.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="userAttribute">
                  <label className="userLabel">Nombre:</label>
                  <input
                    className="userInput"
                    type="text"
                    placeholder={user.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="userAttribute">
                  <label className="userLabel">DNI/CIF:</label>
                  <input
                    className="userInput"
                    type="text"
                    placeholder={user.dni}
                    onChange={(e) => setDni(e.target.value)}
                  />
                </div>
                <div className="userAttribute">
                  <label className="userLabel">Correo electrónico:</label>
                  <input
                    className="userInput"
                    type="text"
                    placeholder={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div id="userButtons">
                <button className="userButton" type="submit">Confirmar cambios</button>
                <button className="userButton" onClick={changeUserContent}>Volver</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default UserContent;