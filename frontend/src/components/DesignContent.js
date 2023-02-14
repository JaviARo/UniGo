import React, { useEffect, useState } from "react";
import axios from "axios";
import { isRouteErrorResponse, Link } from "react-router-dom";
import { DesignComponent, CreateDesign } from "./DesignComponent";
import "./designContent.css";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const endpoint = "http://localhost:8000/api";

function DesignContent() {
  const userId = AuthService.userId();
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    getDesignsByUser();
  }, []);

  const getAllDesigns = async () => {
    const response = await axios({
      url: `${endpoint}/designs`,
      method: "GET",
      headers: authHeader(),
    })
    setDesigns(response.data);
  };

  const getDesignsByUser = async () => {
    const response = await axios({
      url: `${endpoint}/designs/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    setDesigns(response.data);
  };

  async function getCountByUser() {
    const response = await axios({
      url: `${endpoint}/designs/count/${userId}`,
      method: "GET",
      headers: authHeader(),
    })
    return response;
  }

  const deleteDesign = async (id) => {
    await axios({
      url: `${endpoint}/design/${id}`,
      method: "DELETE",
      headers: authHeader(),
    })
    getAllDesigns();
  };

  const haveDesigns = () => {
    if (getCountByUser() === 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div id="designContentHeight">
      {haveDesigns()===true ? (
        <div id="designContentBackground">
          {designs.map((design) => (
            <DesignComponent
              key={design.id}
              id={design.id}
              name={design.name}
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
