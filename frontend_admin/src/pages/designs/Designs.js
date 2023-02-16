import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import authHeader from "../../services/auth-header";
import "../styles.css";

const endpoint = "http://localhost:8000/api";

const Designs = () => {
  const [designs, setDesigns] = useState([]);
  useEffect(() => {
    getAllDesigns();
  }, []);

  const getAllDesigns = async () => {
    const response = await axios({
      url: `${endpoint}/designs`,
      method: "GET",
      headers: authHeader(),
    })
    setDesigns(response.data);
  };

  return (
    <div>
      <Header />
      <div id="adminBackground">
        <h1>Diseños</h1>
        <table>
          <thead>
            <tr>
              <th>Id diseño</th>
              <th>Nombre</th>
              <th>Posición</th>
              <th>Tamaño</th>
              <th>Favorito</th>
              <th>Id usuario</th>
              <th>Id imagen</th>
              <th>Id prenda</th>
            </tr>
          </thead>
          <tbody>
            {designs.map((design) => (
              <tr>
                <td>{design.id}</td>
                <td>{design.name}</td>
                <td>{design.position}</td>
                <td>{design.size}</td>
                <td>{design.favourite}</td>
                <td>{design.user_id}</td>
                <td>{design.image_id}</td>
                <td>{design.clothes_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Designs