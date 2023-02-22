import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import authHeader from "../../services/auth-header";
import "../styles.css";

const endpoint = "http://localhost:8000/api";

const AddClothes = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState([]);
  const navigate = useNavigate();

  const postCloth = (e) => {
    let file = document.getElementById("uploadImage").files[0]
    let formdata = new FormData()
    formdata.append('name', name)
    formdata.append('img', file)

    axios({
      url: `${endpoint}/cloth`,
      method: "POST",
      headers: authHeader(),
      data: formdata,
    })
    navigate("/clothes")
  };
  
  return(
    <div>
      <Header/>
      <div id="adminBackground">
        <h1>Añadir prenda de ropa</h1>
        <form onSubmit={postCloth} id="adminForm">
          <label htmlFor="name">Nombre:</label>
          <input 
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="img">Imagen:</label>
          <input 
            value={img}
            type="file"
            onChange={(e) => setImg(e.target.value)}
            id="uploadImage"
            accept=".jpg,.png"
          />
          <button type="submit">Añadir</button>
        </form>
      </div>
    </div>
  )
} 

export default AddClothes