import { useState } from "react";
import { Col, Row } from "antd";
import authHeader from "../services/auth-header";
import axios from "axios";

import "./designComponent.css";

const endpoint = "http://localhost:8000/api";

export function DesignComponent(props) {
  const f = props.favourite

  const getThisCloth = (clothId) => {
    var request = require('sync-request');
    var res = request('GET', `${endpoint}/cloth/${clothId}`, {
      headers: authHeader()
    });
    return res.body.split("\"");
  };

  const getThisClothImg = (clothId) => {
    return "http://localhost:8000/"+getThisCloth(clothId)[9];
  }

  const getThisClothName = (clothId) => {
    return getThisCloth(clothId)[5];
  }

  const setFavourite = async () => {
    if(props.favourite) {
      f = false;
    } else {
      f = true;
    }

    let formdata = new FormData()
    formdata.append('name', props.name)
    formdata.append('position', props.position)
    formdata.append('size', props.size)
    formdata.append('favourite', f)
    formdata.append('user_id', props.user_id)
    formdata.append('image_id', props.image_id)
    formdata.append('clothes_id', props.clothes_id)
    
    await axios({
      url: `${endpoint}/design/${props.id}`,
      method: "PUT",
      headers: authHeader(),
      data: formdata
    })
  };

  return (
    <a href={`/edit/${props.id}`}>
      <div id="component">
        <Row align="middle">
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={10}>
            <div id="imgBackground">
              <img src={getThisClothImg(props.clothes_id)}/>
            </div>
          </Col>
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={9}>
            <div id="componentText">
              <div id="title">{props.name}</div>
              <div id="subtitle">{getThisClothName(props.clothes_id)}</div>
            </div>
          </Col>
          <Col className="rowDesign" span={3}>
            <button id="heartContainer" onClick={setFavourite}>
              {props.favourite ? (
                <img src="img/heart_filled.png" />
              ) : (
                <img src="img/heart.png"/>
              )}
            </button>
          </Col>
        </Row>
        {/* <div id="imgBackground"></div>
          <div id="title">Título</div>
          <div id="subtitle">Subtítulo</div> */}
      </div>
    </a>
  );
}

export function CreateDesign() {
  return (
    <a href={`/clothes`}>
      <div id="component">
        <Row align="middle">
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={10}>
            <div id="imgBackground">
              <img src="/img/plus.png"/>
            </div>
          </Col>
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={9}>
            <div id="componentText">
              <div id="title">Crear nuevo diseño</div>
            </div>
          </Col>
        </Row>
        {/* <div id="imgBackground"></div>
          <div id="title">Título</div>
          <div id="subtitle">Subtítulo</div> */}
      </div>
    </a>
  );
}
