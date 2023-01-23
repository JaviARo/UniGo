import { Header, Footer } from "../components/Control";
import { Link } from "react-router-dom";
import "./config.css";

function Config() {
  return (
    <>
      <Header />
      <div id="configContentHeight">
        <div id="configButtons">
          <Link to="/user" className="configButton">
            <p>Ver datos de usuario</p>
          </Link>
          <Link to="/designs" className="configButton">
            <p>Contacto</p>
          </Link>
          <Link to="/designs" className="configButton">
            <p>Modo oscuro</p>
          </Link>
          <Link to="/" className="configButton">
            <p id="configButtonSesion">Cerrar sesión</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Config;
