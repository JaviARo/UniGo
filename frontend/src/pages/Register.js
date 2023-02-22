import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
import { HomeFooter } from "../components/Control";
import "./register.css";
import "./formLabel.css";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Campo requerido
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        No es un email válido
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        El nombre de usuario debe estar entre 3 y 20 caracteres
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        La contraseña debe estar ente 4 y 40 caracteres
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("c");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); // Evita que se recarge la página por defecto

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(dni, name, username, email, type, password, confirm_password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          navigate("/designs");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
      <div id="background">
        <div id="registerPage">
          <div id="registerCanvas">
            <div id="name">
              <h1 id="uni">Uni</h1>
              <h1 id="go">Go</h1>
            </div>
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <div id="registerForm">
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="forename"
                      className="form-control"
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="username">Nombre de usuario</label>
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                      className="form-control"
                      validations={[required, vusername]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="dni">DNI/CIF</label>
                    <Input
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      type="text"
                      name="dni"
                      className="form-control"
                      validations={[required]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email"
                      className="form-control"
                      validations={[required, validEmail]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="form-control"
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirm_password">
                      Repita su contraseña
                    </label>
                    <Input
                      value={confirm_password}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="form-control"
                      validations={[required, vpassword]}
                    />
                  </div>

                  <div className="form-group">
                    <div id="buttonDiv">
                      <button id="submitButton">
                        Registrarse
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {message && successful && navigate("/designs")}
              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
          <HomeFooter />
        </div>
      </div>
    </>
  );
};

export default Register;
