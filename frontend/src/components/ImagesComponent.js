import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import "./clothesComponent.css";
import AuthService from "../services/auth.service";

const endpoint = "http://localhost:8000/api";

function ImagesComponent() {
  const userId = AuthService.userId();
  const [images, setImages] = useState([]);

  const querystring = window.location.search;
  let params = new URLSearchParams(querystring);
  const clothId = params.get('cloth_id');

  useEffect(() => {
    getImagesByUser();
  }, []);

  const getImagesByUser = async () => {
    const response = await axios.get(`${endpoint}/images/user/${userId}`);
    setImages(response.data);
  };

  return (
    <div id="clothesContentHeight">
      <div id="clothesContentBackground">
        <Row justify="start" gutter={[16, 16]}>
          {images.map((image) => (
            <Col span={12}>
              <a href={`/create/?cloth_id=` + clothId + `&image_id=` + image.id}>
                <div className="canvas">
                  <div className="clothesBackground">
                    <img src={"http://localhost:8000/" + image.img} alt="" />
                  </div>
                  <p className="clothesName">{image.name}</p>
                </div>
              </a>
            </Col>
          ))}
          <Col span={12}>
            <div className="canvas">
              <div className="clothesBackground">
                <img src="/img/plus.png" alt=""/>
              </div>
              <p className="clothesName">Subir foto</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ImagesComponent;
