// import axios from "axios";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
// import FormLabel from "../components/FormLabel";
import { HomeFooter } from "../components/Control";
import "./login.css";
import "./formLabel.css";

// const endpoint = "http://localhost:8000/api/login/";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert" role="alert">
        Campo requerido
      </div>
    );
  }
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        (response) => {
          console.log(response);
          // localStorage.setItem("token", response.data.data.token);
          navigate("/designs");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  // const store = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(endpoint, {
  //       username: username,
  //       password: password
  //     });
  //   } catch (error) {
  //     console.error(error.response.data);
  //   }
  //   navigate("/designs");
  // };
  return (
    <div id="background">
      <div id="loginPage">
        <div id="loginCanvas">
          <div id="name">
            <h1 id="uni">Uni</h1>
            <h1 id="go">Go</h1>
          </div>
          <Form onSubmit={handleLogin} ref={form}>
            <div id="loginForm">
              <div className="form-group">
                <label htmlFor="username">Nombre de usuario</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <div id="buttonDiv">
                  <button id="submitButton" disabled={loading}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Iniciar sesión</span>
                  </button>
                </div>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </div>
          </Form>
          {/* <form onSubmit={store}>
            <div id="labelContainer">
              <div id="username">
                <label id="label">
                  <p id="labelText">Nombre de usuario</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
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
                  />
                </label>
              </div>
            </div>
            <input type="submit" value="Iniciar sesión"></input>
          </form> */}
        </div>
        <HomeFooter />
      </div>
    </div>
  );
}

export default Login;
