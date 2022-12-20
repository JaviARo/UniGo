import { Header, Footer } from "../components/Control";
import "./config.css";

function Config() {
  return (
    <>
      <Header />
      <div id="configContentHeight">
        <div id="configButtons">
          <a className="configButton" href="/designs">
            <p className="configButtonText">Ver datos de usuario</p>
          </a>
          <a className="configButton" href="/designs">
            <p className="configButtonText">Contacto</p>
          </a>
          <a className="configButton" href="/designs">
            <p className="configButtonText">Modo oscuro</p>
          </a>
          <a className="configButton" href="/designs">
            <p className="configButtonText">Cerrar sesión</p>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Config;
