import { Header, Footer } from "../components/Control";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./config.css";
import AuthService from "../services/auth.service";

function Config() {
  const navigate = useNavigate();
  const navigateToUser = () => {
    navigate('/user')
  }

  const logout = () => {
    AuthService.logout();
    navigate('/')
  }
  return (
    <>
      <Header />
      <div id="configContentHeight">
        <div id="configButtons">
          <button className="configButton" onClick={navigateToUser}>
            <p>Ver datos de usuario</p>
          </button>
          <button className="configButton" onClick={logout}>
            <p id="configButtonSesion">Cerrar sesión</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Config;
