import React, { useEffect, useState } from "react";
import axios from "axios";
import { isRouteErrorResponse, Link } from "react-router-dom";
import { DesignComponent, CreateDesign } from "./DesignComponent";
import "./designContent.css";
import AuthService from "../services/auth.service";

const endpoint = "http://localhost:8000/api";
//const userId = AuthService.getCurrentUser().data.id;

function DesignContent() {
  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    // getAllDesigns()
    getDesignsByUser();
  }, []);

  const getAllDesigns = async () => {
    const response = await axios.get(`${endpoint}/designs`);
    setDesigns(response.data);
  };

  const getDesignsByUser = async () => {
    const response = await axios.get(`${endpoint}/designs/user/${AuthService.userId}`);
    setDesigns(response.data);
  };

  async function getCountByUser() {
    const response = await axios.get(`${endpoint}/designs/count/${AuthService.userId}`);
    return response;
  };

  const deleteDesign = async (id) => {
    await axios.delete(`${endpoint}/design/${id}`);
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
      {haveDesigns ? (
        <a href={`/clothes`}>
          <div id="createFirstDesign">
            <img className="icon" src="/img/plus.png" alt="" />
            <p>Crear nuevo diseño</p>
          </div>
        </a>
      ) : (
        <div id="designContentBackground">
          {designs.map((design) => (
            <DesignComponent
              key={design.id}
              id={design.id}
              name={design.name}
            />
          ))}
          <CreateDesign />
        </div>
      )}
    </div>
  );
}


export default DesignContent;
