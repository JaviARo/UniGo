import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [show, setShow] = useState(false);

  function changeHome() {
    var homePage = document.getElementById("homePage");
    homePage.classList.add("blurFilter");

    setShow(true);
  }

  return (
    <div id="background">
      <div id="homePage">
        <div id="name">
          <h1 id="uni">Uni</h1>
          <h1 id="go">Go</h1>
        </div>
        <div id="homeCanvas">
          <p id="description">
            Diseñe su propio uniforme con una selección de prendas
          </p>
          <p id="enter" onClick={changeHome}>
            Entrar {">"}
          </p>
        </div>
        {show ? (
          <div id="newCanvas">
            <div className="homeLinks">
              <a href="/login" className="textButton">
                Inicia sesión
              </a>
              <a href="/register" className="textButton">
                Registrarse
              </a>
            </div>
            {/* <div id="imgContainer">
              <img className="imgButton" src="img/google.png" alt="" />
              <img className="imgButton" src="img/facebook.png" alt="" />
            </div> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
