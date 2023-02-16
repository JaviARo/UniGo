import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import authHeader from "../../services/auth-header";
import "../styles.css";

const endpoint = "http://localhost:8000/api";

const Images = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    const response = await axios({
      url: `${endpoint}/images`,
      method: "GET",
      headers: authHeader(),
    })
    setImages(response.data);
  };

  return (
    <div>
      <Header />
      <div id="adminBackground">
        <h1>Imágenes</h1>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <tr>
                <td>{image.name}</td>
                <td><img src={"http://localhost:8000/" + image.img} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Images