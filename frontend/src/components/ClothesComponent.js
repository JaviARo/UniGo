import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import "./clothesComponent.css";

const endpoint = "http://localhost:8000/api";

function ClothesComponent() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    getAllClothes();
  }, []);

  const getAllClothes = async () => {
    const response = await axios.get(`${endpoint}/clothes`);
    setClothes(response.data);
  };

  return (
    <div id="clothesContentHeight">
      <div id="clothesContentBackground">
        {/* <Row justify="center">
          <Col span={9}>
            <div class="canvas"></div>
          </Col>
          <Col span={1}></Col>
          <Col span={9}>
            <div class="canvas"></div>
          </Col>
        </Row> */}
        <Row justify="start" gutter={[16, 16]}>
          {clothes.map((cloth) => (
            <Col span={12}>
              <a href={`/create`}>
                <div className="canvas">
                  <div className="clothesBackground">
                  backend\public\images\clothesTable\1673634013-patito_amarillo.jpg
                    <img src={require("../../../backend/public/${cloth.img}").default} alt=""/>
                  </div>
                  <p className="clothesName">{cloth.name}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ClothesComponent;
