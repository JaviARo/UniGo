import FormLabel from "../components/FormLabel";
import "./login.css";

function Login() {
  return (
    <div id="background">
      <div id="loginPage">
        <div id="loginCanvas">
          <div id="name">
            <h1 id="uni">Uni</h1>
            <h1 id="go">Go</h1>
          </div>
          <form>
            <FormLabel label="Nombre de usuario" name="username" />
            <FormLabel label="Contraseña" name="password" />
            <input type="submit" value="Iniciar sesión"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
