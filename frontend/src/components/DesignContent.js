import React, { useEffect, useState } from "react";
import axios from "axios";
import { DesignComponent, CreateDesign } from "./DesignComponent";
import "./designContent.css";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const endpoint = "http://localhost:8000/api";

function DesignContent() {
  const userId = AuthService.userId();
  const [designs, setDesigns] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getDesignsByUser();
    const count = getCountByUser();

    haveDesigns(count);

  }, []);

  const getDesignsByUser = async () => {
    const response = await axios({
      url: `${endpoint}/designs/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    setDesigns(response.data);
  };

  const getCountByUser= () => {
    var request = require('sync-request');
    var res = request('GET', `${endpoint}/designs/count/${userId}`, {
      headers: authHeader()
    });
    return(res.body);
  }

  const haveDesigns = (count) => {
    if (count > 0) {
      setShow(true);
    }
  };

  return (
    <div id="designContentHeight">
      {show ? (
        <div id="designContentBackground">
          {designs.map((design) => (
            <DesignComponent
              key={design.id}
              id={design.id}
              name={design.name}
              position={design.position}
              size={design.size}
              favourite={design.favourite}
              user_id={design.user_id}
              image_id={design.image_id}
              clothes_id={design.clothes_id}
            />
          ))}
          <CreateDesign />
        </div>
      ) : (
        <a href={`/clothes`}>
          <div id="createFirstDesign">
            <img className="icon" src="/img/plus.png" alt="" />
            <p>Crear nuevo diseño</p>
          </div>
        </a>
      )}
    </div>
  );
}

export default DesignContent;
