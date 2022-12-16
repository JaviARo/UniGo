import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import FormLabel from "../components/FormLabel";
import { HomeFooter } from "../components/Control";
import "./register.css";
import "./formLabel.css";

const endpoint = "http://localhost:8000/api/register/";

function Register() {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState('c');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(endpoint, {
        dni: dni,
        name: name,
        username: username,
        password: password,
        confirm_password: confirm_password,
        email: email,
        type: type
      });
    } catch (error) {
      console.error(error.response.data);
    }
    // navigate("/");
  };

  // function changeLabel() {
  //   var label = document.getElementById(name);

  //   label.classList.remove("labelText");
  //   label.classList.add("labelTextSelected");
  // }

  return (
    <div id="background">
      <div id="registerPage">
        <div id="registerCanvas">
          <div id="name">
            <h1 id="uni">Uni</h1>
            <h1 id="go">Go</h1>
          </div>
          <form onSubmit={store}>
            <div id="labelContainer">
              <div id="forename">
                <label id="label">
                  <p id="labelText">Nombre</p>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="forename"
                    // onClick={changeLabel}
                  />
                </label>
              </div>
            </div>
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
              <div id="dni">
                <label id="label">
                  <p id="labelText">DNI/CIF</p>
                  <input
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    type="text"
                    name="dni"
                    // onClick={changeLabel}
                  />
                </label>
              </div>
            </div>
            <div id="labelContainer">
              <div id="email">
                <label id="label">
                  <p id="labelText">Correo electrónico</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="email"
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
            <div id="labelContainer">
              <div id="rpassword">
                <label id="label">
                  <p id="labelText">Repita su contraseña</p>
                  <input
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="text"
                    name="password"
                    // onClick={changeLabel}
                  />
                </label>
              </div>
            </div>
            {/* <FormLabel label="Nombre de usuario" name="username" />
            <FormLabel label="DNI/CIF" name="dni" />
            <FormLabel label="Correo electrónico" name="email" />
            <FormLabel label="Contraseña" name="password" />
            <FormLabel label="Repita su contraseña" name="rpassword" /> */}
            <input type="submit" value="Registrarse"></input>
          </form>
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}

export default Register;
