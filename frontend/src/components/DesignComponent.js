import { Col, Row } from "antd";
import "./designComponent.css";

export function DesignComponent(props) {
  return (
    <a href={`/edit/${props.id}`}>
      <div id="component">
        <Row align="middle">
          <Col className="rowDesign" span={1}></Col>
          <Col className="rowDesign" span={10}>
            <div id="imgBackground"></div>
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
            <div id="imgBackground"></div>
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
