// import axios from "axios";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
// import FormLabel from "../components/FormLabel";
import { HomeFooter } from "../components/Control";
import "./register.css";
import "./formLabel.css";

import AuthService from "../services/auth.service";

// const endpoint = "http://localhost:8000/api/register/";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
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

  // const store = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(endpoint, {
  //       dni: dni,
  //       name: name,
  //       username: username,
  //       password: password,
  //       confirm_password: confirm_password,
  //       email: email,
  //       type: type
  //     });
  //   } catch (error) {
  //     console.error(error.response.data);
  //   }
  //   navigate("/designs");
  // };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
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
  // function changeLabel() {
  //   var label = document.getElementById(name);

  //   label.classList.remove("labelText");
  //   label.classList.add("labelTextSelected");
  // }

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
              <div>
              
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                    {/* <p id="labelText">Nombre</p> */}
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="forename"
                      // onClick={changeLabel}
                      className="form-control"
                      validations={[required]}
                    />
                </div>
              
              
                <div className="form-group">
                  <label htmlFor="username">Nombre de usuario</label>
                    {/* <p id="labelText">Nombre de usuario</p> */}
                    <Input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                      // onClick={changeLabel}
                      className="form-control"
                      validations={[required, vusername]}
                    />
                </div>
              
              
                <div className="form-group">
                  <label htmlFor="dni">DNI/CIF</label>
                    {/* <p id="labelText">DNI/CIF</p> */}
                    <Input
                      value={dni}
                      onChange={(e) => setDni(e.target.value)}
                      type="text"
                      name="dni"
                      // onClick={changeLabel}
                      className="form-control"
                      validations={[required]}
                    />
                </div>
              
              
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                    {/* <p id="labelText">Correo electrónico</p> */}
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email"
                      // onClick={changeLabel}
                      className="form-control"
                      validations={[required, validEmail]}
                    />
                </div>
              
              
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                    {/* <p id="labelText">Contraseña</p> */}
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="text"
                      name="password"
                      // onClick={changeLabel}
                      className="form-control"
                      validations={[required, vpassword]}
                    />
                </div>
              
              
                <div className="form-group">
                  <label htmlFor="confirm_password">Repita su contraseña</label>
                    {/* <p id="labelText">Repita su contraseña</p> */}
                    <Input
                      value={confirm_password}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="text"
                      name="password"
                      // onClick={changeLabel}
                      className="form-control"
                      validations={[required, vpassword]}
                    />
                </div>
              
              <div className="form-group">
                <button className="btn btn-primary btn-block">Registrarse</button>
              </div>
               {/* <Input type="submit" value="Registrarse"></Input> */}
              </div>
            )}
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

// import axios from "axios";
// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// // import FormLabel from "../components/FormLabel";
// import { HomeFooter } from "../components/Control";
// import "./register.css";
// import "./formLabel.css";

// import AuthService from "../services/auth.service";

// const endpoint = "http://localhost:8000/api/register/";

// const Register = () => {
//   const form = useRef();
//   const checkBtn = useRef();

//   const [dni, setDni] = useState("");
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm_password, setConfirmPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [type, setType] = useState("c");
//   const [successful, setSuccessful] = useState(false);
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const store = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(endpoint, {
//         dni: dni,
//         name: name,
//         username: username,
//         password: password,
//         confirm_password: confirm_password,
//         email: email,
//         type: type
//       });
//     } catch (error) {
//       console.error(error.response.data);
//     }
//     navigate("/designs");
//   };

//   // function changeLabel() {
//   //   var label = document.getElementById(name);

//   //   label.classList.remove("labelText");
//   //   label.classList.add("labelTextSelected");
//   // }

//   return (
//     <div id="background">
//       <div id="registerPage">
//         <div id="registerCanvas">
//           <div id="name">
//             <h1 id="uni">Uni</h1>
//             <h1 id="go">Go</h1>
//           </div>
//           <form onSubmit={store}>
//             <div id="labelContainer">
//               <div id="forename">
//                 <label id="label">
//                   <p id="labelText">Nombre</p>
//                   <input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     type="text"
//                     name="forename"
//                     // onClick={changeLabel}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div id="labelContainer">
//               <div id="username">
//                 <label id="label">
//                   <p id="labelText">Nombre de usuario</p>
//                   <input
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     type="text"
//                     name="username"
//                     // onClick={changeLabel}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div id="labelContainer">
//               <div id="dni">
//                 <label id="label">
//                   <p id="labelText">DNI/CIF</p>
//                   <input
//                     value={dni}
//                     onChange={(e) => setDni(e.target.value)}
//                     type="text"
//                     name="dni"
//                     // onClick={changeLabel}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div id="labelContainer">
//               <div id="email">
//                 <label id="label">
//                   <p id="labelText">Correo electrónico</p>
//                   <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type="text"
//                     name="email"
//                     // onClick={changeLabel}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div id="labelContainer">
//               <div id="password">
//                 <label id="label">
//                   <p id="labelText">Contraseña</p>
//                   <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     type="text"
//                     name="password"
//                     // onClick={changeLabel}
//                   />
//                 </label>
//               </div>
//             </div>
//             <div id="labelContainer">
//               <div id="rpassword">
//                 <label id="label">
//                   <p id="labelText">Repita su contraseña</p>
//                   <input
//                     value={confirm_password}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     type="text"
//                     name="password"
//                     // onClick={changeLabel}
//                   />
//                 </label>
//               </div>
//             </div>
//             {/* <FormLabel label="Nombre de usuario" name="username" />
//             <FormLabel label="DNI/CIF" name="dni" />
//             <FormLabel label="Correo electrónico" name="email" />
//             <FormLabel label="Contraseña" name="password" />
//             <FormLabel label="Repita su contraseña" name="rpassword" /> */}
//             <input type="submit" value="Registrarse"></input>
//           </form>
//         </div>
//         <HomeFooter />
//       </div>
//     </div>
//   );
// };

// export default Register;