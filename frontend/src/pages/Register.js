import FormLabel from "../components/FormLabel";
import "./register.css";

function Register() {
  return (
    <div id="background">
      <div id="registerPage">
        <div id="registerCanvas">
          <div id="name">
            <h1 id="uni">Uni</h1>
            <h1 id="go">Go</h1>
          </div>
          <form>
            <FormLabel label="Nombre" name="forename" />
            <FormLabel label="Nombre de usuario" name="username" />
            <FormLabel label="DNI/CIF" name="dni" />
            <FormLabel label="Correo electrónico" name="email" />
            <FormLabel label="Contraseña" name="password" />
            <FormLabel label="Repita su contraseña" name="rpassword" />
            <input type="submit" value="Registrarse"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;