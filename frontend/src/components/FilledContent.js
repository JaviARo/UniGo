import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./filledContent.css";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const endpoint = "http://localhost:8000/api";

function FilledContent(edit) {
  const navigate = useNavigate();
  const userId = AuthService.userId();
  const [cloth, setCloth] = useState([]);
  const [image, setImage] = useState([]);

  const [name, setName] = useState("");
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
      setImage_id(imageId);
      setPosition();
      setSize();
    }

    setClothes_id(clothId);

    setUser_id(userId);
    setFavourite(false);
  }, []);

  const postDesign = () => {
    axios({
      url: `${endpoint}/design`,
      method: "POST",
      headers: authHeader(),
      data: {
        name,
        position,
        size,
        favourite,
        user_id,
        image_id,
        clothes_id
      }
    }).then(() => { navigate("/designs") });
  };

  const getThisCloth = async () => {
    const response = await axios({
      url: `${endpoint}/cloth/${clothId}`,
      method: "GET",
      headers: authHeader(),
    });
    setCloth(response.data);
  };

  const getImage = async () => {
    const response = await axios({
      url: `${endpoint}/image/${imageId}`,
      method: "GET",
      headers: authHeader(),
    });
    setImage(response.data);
  };

  const imageSize = () => {
    var h = document.getElementById("height").value;
    var element = document.getElementById("imageImg");
    element.style.height = h + "%";
    setSize(h);
  }

  const imagePosition = () => {
    var x = document.getElementById("x-pos").value;
    var y = document.getElementById("y-pos").value;
    var element = document.getElementById("imageImg");
    element.style.left = x + "%";
    element.style.top = y + "%";
    setPosition("\"x\":\"" + x + "\",\"y\":\"" + y + "\"");
  }

  return (
    <div id="filledContentHeight">
      <div id="filledContentBackground">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="titleInput"
          name="titleInput"
          placeholder="Título"
        />
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
                  value={size}
                  type="number"
                  name="height"
                  min="10"
                  max="30"
                  id="height"
                  onChange={(e) => imageSize()}
                />
              </div>
              <div className="designFormControl">
                <label htmlFor="x-pos">Eje x</label>
                <input
                  type="number"
                  name="x-pos"
                  min="0"
                  max="100"
                  id="x-pos"
                  onChange={(e) => imagePosition()}
                />
              </div>
              <div className="designFormControl">
                <label htmlFor="y-pos">Eje y</label>
                <input
                  type="number"
                  name="y-pos"
                  min="0"
                  max="100"
                  id="y-pos"
                  onChange={(e) => imagePosition()}
                />
              </div>
            </div>
          </form>
          <button className="editButton" onClick={postDesign}>
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilledContent;
