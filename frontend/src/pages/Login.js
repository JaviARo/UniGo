import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import FormLabel from "../components/FormLabel";
import { HomeFooter } from "../components/Control";
import "./login.css";
import "./formLabel.css";

const endpoint = "http://localhost:8000/api/login/";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, {
        username: username,
        password: password
      });
    } catch (error) {
      console.error(error.response.data);
    }
    navigate("/designs");
  };
  return (
    <div id="background">
      <div id="loginPage">
        <div id="loginCanvas">
          <div id="name">
            <h1 id="uni">Uni</h1>
            <h1 id="go">Go</h1>
          </div>
          <form onSubmit={store}>
            <div id="labelContainer">
              <div id="username">
                <label id="label">
                  <p id="labelText">Nombre de usuario</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    // onClick={changeLabel}
                  />
                </label>
              </div>
            </div>
            <div id="labelContainer">
              <div id="password">
                <label id="label">
                  <p id="labelText">Contraseña</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    name="password"
                    // onClick={changeLabel}
                  />
                </label>
              </div>
            </div>
            {/* <FormLabel label="Nombre de usuario" name="username" />
            <FormLabel label="Contraseña" name="password" /> */}
            <input type="submit" value="Iniciar sesión"></input>
          </form>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}

export default Login;
