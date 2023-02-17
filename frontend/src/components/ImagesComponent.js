import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import "./clothesComponent.css";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";

const endpoint = "http://localhost:8000/api";

function ImagesComponent() {
  const userId = AuthService.userId();
  const [images, setImages] = useState([]);

  const [name, setName] = useState('');
  const [img, setImg] = useState([]);
  const [user_id, setUser_id] = useState(userId);

  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const clothId = params.get('cloth_id');

  useEffect(() => {
    getImagesByUser();
  }, []);

  const getImagesByUser = async () => {
    const response = await axios({
      url: `${endpoint}/images/user/${userId}`,
      method: "GET",
      headers: authHeader(),
    });
    setImages(response.data);
  };

  const storeImage = (e) => {
    let file = document.getElementById("uploadImage").files[0]
    let formdata = new FormData()

    formdata.append('name', file.name)
    formdata.append('img', file)
    formdata.append('user_id', userId)

    console.log(file)

    axios({
      url: `${endpoint}/image`,
      method: "POST",
      headers: authHeader(),
      data: formdata
    }).then((res) => {
      getImagesByUser();
    })

    // window.location.reload();
  };

  const haveImage = () => {
    if(document.getElementById("uploadImage").files[0].name!=null){
      return true;
    } else {
      return false;
    }
  }

  return (
    <div id="clothesContentHeight">
      <div id="clothesContentBackground">
        <Row justify="start" gutter={[16, 16]}>
          {images.map((image) => (
            <Col span={12}>
              <a href={`/create/?cloth_id=` + clothId + `&image_id=` + image.id}>
                <div className="canvas">
                  <div className="clothesBackground">
                    <img className="imageOnClothes" src={"http://localhost:8000/" + image.img} alt="" />
                  </div>
                  <p className="clothesName">{image.name}</p>
                </div>
              </a>
            </Col>
          ))}
          <Col span={12}>
            <div className="canvas">
              <div className="clothesBackground">
                <img id="plus" src="/img/plus.png" alt="" />
              </div>
              <p className="clothesName">Subir foto</p>
              <form id="imgForm" onSubmit={storeImage}>
                <input
                  value={img}
                  onChange={(e) => storeImage(e.target.value)}
                  type="file"
                  id="uploadImage"
                  accept=".jpg,.png"
                />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ImagesComponent;
