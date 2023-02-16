import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import "./clothesComponent.css";
import authHeader from "../services/auth-header";

const endpoint = "http://localhost:8000/api";

function ClothesComponent() {
  const [clothes, setClothes] = useState([]);

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

  return (
    <div id="clothesContentHeight">
      <div id="clothesContentBackground">
        <Row justify="start" gutter={[16, 16]}>
          {clothes.map((cloth) => (
            <Col span={12}>
              <a href={`/create/?cloth_id=`+cloth.id}>
                <div className="canvas">
                  <div className="clothesBackground">
                    <img className="imageOnClothes" src={"http://localhost:8000/"+cloth.img} alt=""/>
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
