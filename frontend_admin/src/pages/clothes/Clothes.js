import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import authHeader from "../../services/auth-header";
import "../styles.css";

const endpoint = "http://localhost:8000/api";

const Clothes = () => {
  const [clothes, setClothes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllClothes();
  }, []);

  const getAllClothes = async () => {
    const response = await axios({
      url: `${endpoint}/clothes`,
      method: "GET",
      headers: authHeader(),
    })
    setClothes(response.data);
  };

  const deleteThisCloth = async (id) => {
    if (window.confirm('¿Quieres borrar la prenda?')) {
      await axios({
        url: `${endpoint}/cloth/${id}`,
        method: "DELETE",
        headers: authHeader(),
      })
      window.location.reload()
    }
  };

  const navigateToAddClothes = () => {
    navigate("/add_clothes")
  }

  return (
    <div>
      <Header />
      <div id="adminBackground">
        <h1>Prendas de ropa</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clothes.map((cloth) => (
              <tr>
                <td>{cloth.name}</td>
                <td><img src={"http://localhost:8000/" + cloth.img} /></td>
                <td>
                  <img
                    className="deleteImg"
                    src="/img/delete.png"
                    onClick={() => deleteThisCloth(cloth.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={navigateToAddClothes}>Añadir prenda de ropa</button>
      </div>
    </div>
  )
}

export default Clothes