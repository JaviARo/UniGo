import { useState } from "react";
import { Col, Row } from "antd";
import authHeader from "../services/auth-header";
import axios from "axios";

import "./designComponent.css";

const endpoint = "http://localhost:8000/api";

export function DesignComponent(props) {

  const getThisCloth = (clothId) => {
    // const response = await axios({
    //   url: `${endpoint}/cloth/${clothId}`,
    //   method: "GET",
    //   headers: authHeader(),
    // });
    //   response.then(data => console.log(data.img));

    var request = require('sync-request');
    var res = request('GET', `${endpoint}/cloth/${clothId}`, {
      headers: authHeader()
    });

    console.log(res.body.split("\"")[9]);
    return "http://localhost:8000/"+res.body.split("\"")[9];
  };

  return (
    <a href={`/edit/${props.id}`}>
      <div id="component">
        <Row align="middle">
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={10}>
            <div id="imgBackground">
              <img src={getThisCloth(props.clothes_id)}/>
            </div>
          </Col>
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={9}>
            <div id="componentText">
              <div id="title">{props.name}</div>
              <div id="subtitle">Subtítulo</div>
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
