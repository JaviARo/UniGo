import React, { useState } from "react";
import "./home.css";

function Home() {
  const [show, setShow] = useState(false);

  function changeHome() {
    var homePage = document.getElementById("homePage");
    homePage.classList.add("blurFilter");

    setShow(true);
  }

  return (
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
          <div className="sos">
            <p class="textButton" onClick={changeHome}>
              Inicia sesión
            </p>
            <p class="textButton" onClick={changeHome}>
              Registrarse
            </p>
          </div>
          <div id="imgContainer">
            <img className="imgButton" src="img/google.png" alt="" />
            <img className="imgButton" src="img/facebook.png" alt="" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
