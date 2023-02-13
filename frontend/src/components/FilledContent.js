import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import "./filledContent.css";
import AuthService from "../services/auth.service";

const endpoint = "http://localhost:8000/api";

function FilledContent() {
  const navigate = useNavigate();
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
      // getImgStyles();
      setImage_id(imageId);
      setPosition();
      setSize();
    }

    setClothes_id(clothId);

    setUser_id(userId);
    setFavourite("false");
  }, []);

  const postDesign = (
    // name,
    // img,
    // position,
    // size,
    // favourite,
    // user_id,
    // image_id,
    // clothes_id
  ) => {
    createImage();
    console.log(img);
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
    // navigate("./designs");
  };

  // const getImgStyles = () => {
  //   const imgImg = document.querySelector('#imageImg')
  //   const style = getComputedStyle(imgImg);
  //   const h = style.getPropertyValue(style[144]);
  //   const l = style.getPropertyValue(style[160]);
  //   const t = style.getPropertyValue(style[279]);
  //   console.log(h);
  //   console.log(l);
  //   console.log(t);
  // };

  const getThisCloth = async () => {
    const response = await axios.get(`${endpoint}/cloth/${clothId}`);
    setCloth(response.data);
  };

  const getImage = async () => {
    const response = await axios.get(`${endpoint}/image/${imageId}`);
    setImage(response.data);
  };

  const imageSize = () => {
    var h = document.getElementById("height").value;
    console.log(h + "%");
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
    setPosition("x=" + x + "-y=" + y);
  }

  const createImage = () => {
    var i = document.querySelector("#designCanvas");
    html2canvas(i, {
      allowTaint: true,
      proxy: "http://localhost:8000/public",
      logging: true,
      onrendered: function(canvas) {
        const dataUrl = canvas.toDataURL();
        console.log(dataUrl);
        // setImg(dataUrl);
        // console.log(img)
      }
    })
  
    // .then(canvas => {
    //   const dataUrl = canvas.toDataURL();
    //   console.log(dataUrl);
    //   setImg(dataUrl);
    //   console.log(img)
    // })
    // domtoimage
    //   .toPng(canvas, { cacheBust: true })
    //   .then(function (dataUrl) {
    //     var i = new Image();
    //     i.crossOrigin = '*';
    //     i.src = dataUrl;
    //     console.log(i.src);
    //     setImg(i.src);
    //   })
    //   .catch(function (error) {
    //     console.error("oops, something went wrong!", error);
    //   });
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
          
          {/* <button className="editButton">Seleccionar archivo</button>
          <button className="editButton">Guardar cambios</button> */}
        </div>
      </div>
    </div>
  );
}

export default FilledContent;
