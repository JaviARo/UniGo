import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import authHeader from "../services/auth-header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./designComponent.css";

const endpoint = "http://localhost:8000/api";

export function DesignComponent(props) {
  var f = props.favourite;
  const navigate = useNavigate();

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

  const deleteDesign = async (id) => {
    if (window.confirm('¿Quieres borrar el diseño?')) {
      await axios({
        url: `${endpoint}/design/${id}`,
        method: "DELETE",
        headers: authHeader(),
      })
      window.location.reload();
    }
  };

  const setFavourite = () => {
    if(props.favourite) {
      f = false;
    } else {
      f = true;
    }

    let fd = new FormData()
    fd.append('name', props.name)
    fd.append('position', props.position)
    fd.append('size', props.size)
    fd.append('favourite', f)
    fd.append('user_id', props.user_id)
    fd.append('image_id', props.image_id)
    fd.append('clothes_id', props.clothes_id)
    
    console.log(fd);
    axios({
      url: `${endpoint}/design/${props.id}`,
      method: "PUT",
      headers: authHeader(),
      data: fd,
      processData: false
    })
  };

  const navigateToEdit = () => {
    navigate(`/edit/${props.id}`)
  }

  return (
      <div id="component">
        <Row align="middle">
          <Col className="rowDesign" span={1} onClick={navigateToEdit}></Col>
          <Col className="rowDesign" span={10} onClick={navigateToEdit}>
            <div id="imgBackground">
              <img className="designComponentImg" src={getThisClothImg(props.clothes_id)}/>
            </div>
          </Col>
          <Col className="rowDesign" span={1} onClick={navigateToEdit}></Col>
          <Col className="rowDesign" span={9} onClick={navigateToEdit}>
            <div id="componentText">
              <div id="title">{props.name}</div>
              <div id="subtitle">{getThisClothName(props.clothes_id)}</div>
            </div>
          </Col>
          <Col className="rowDesign" span={3}>
            <div id="heartContainer">
              {props.favourite ? (
                <img src="img/heart_filled.png" onClick={setFavourite}/>
              ) : (
                <img src="img/heart.png" onClick={setFavourite}/>
              )}
              <img src="img/delete.png" onClick={() => deleteDesign(props.id)}/>
            </div>
          </Col>
        </Row>
        {/* <div id="imgBackground"></div>
          <div id="title">Título</div>
          <div id="subtitle">Subtítulo</div> */}
      </div>
    
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
              <img id="designPlus" src="/img/plus.png"/>
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
