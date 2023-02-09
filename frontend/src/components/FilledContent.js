import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./filledContent.css";
import AuthService from "../services/auth.service";

const endpoint = "http://localhost:8000/api";

function FilledContent() {
  const userId = AuthService.userId();
  const [cloth, setCloth] = useState([]);
  const [image, setImage] = useState([]);

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [position, setPosition] = useState("");
  const [size, setSize] = useState("");
  const [favourite, setFavourite] = useState("");
  const [user_id, setUser_id] = useState("");
  const [image_id, setImage_id] = useState("");
  const [clothes_id, setClothes_id] = useState("");

  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const clothId = params.get("cloth_id");
  const imageId = params.get("image_id");

  useEffect(() => {
    getThisCloth();
    if (imageId != null) {
      getImage();
      getImgStyles();
      setImage_id(imageId);
      setPosition();
      setSize();
    }

    setClothes_id(clothId);

    setUser_id(userId);
    setFavourite("false");
  }, []);

  const postDesign = (
    name,
    img,
    position,
    size,
    favourite,
    user_id,
    image_id,
    clothes_id
  ) => {
    return axios.post(endpoint + "/design", {
      name,
      img,
      position,
      size,
      favourite,
      user_id,
      image_id,
      clothes_id,
    });
  };

  const getImgStyles = () => {
    const imgImg = document.querySelector('#imageImg')
    const style = getComputedStyle(imgImg);
    const h = style.getPropertyValue(style[144]);
    const l = style.getPropertyValue(style[160]);
    const t = style.getPropertyValue(style[279]);
    console.log(h);
    console.log(l);
    console.log(t);
  };

  const getThisCloth = async () => {
    const response = await axios.get(`${endpoint}/cloth/${clothId}`);
    setCloth(response.data);
  };

  const getImage = async () => {
    const response = await axios.get(`${endpoint}/image/${imageId}`);
    setImage(response.data);
  };

  return (
    <div id="filledContentHeight">
      <div id="filledContentBackground">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="titleInput"
          name="titleInput"
          placeholder="Título"
        ></input>
        {/* <h2 id="designTitle">Título</h2> */}
        <div id="designCanvas">
          <img
            id="clothImg"
            src={"http://localhost:8000/" + cloth.img}
            alt=""
          />
          {imageId != null ? (
            <img
              id="imageImg"
              src={"http://localhost:8000/" + image.img}
              alt=""
            />
          ) : null}
        </div>
        <div id="editButtons">
          <Link to={`/images/?cloth_id=` + clothId} className="editButton">
            <p>Seleccionar archivo</p>
          </Link>
          <form>
            <div id="formContainer">
              <div className="designFormControl">
                <label htmlFor="height">Tamaño</label>
                <input
                  type="number"
                  name="height"
                  min="10"
                  max="30"
                />
              </div>
              <div className="designFormControl">
                <label htmlFor="x-pos">Eje x</label>
                <input
                  type="number"
                  name="x-pos"
                  min="0"
                  max="100"
                />
              </div>
              <div className="designFormControl">
                <label htmlFor="y-pos">Eje y</label>
                <input
                  type="number"
                  name="y-pos"
                  min="10"
                  max="100"
                />
              </div>
            </div>
          </form>
          <Link to="/designs" className="editButton">
            <p>Guardar cambios</p>
          </Link>
          {/* <button className="editButton">Seleccionar archivo</button>
          <button className="editButton">Guardar cambios</button> */}
        </div>
      </div>
    </div>
  );
}

export default FilledContent;
