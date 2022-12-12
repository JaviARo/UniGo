import { Col, Row } from "antd";
import "./designComponent.css";

function DesignComponent() {
  return (
    <div id="component">
      <Row align="middle">
        <Col className="rowDesign" span={1}></Col>
        <Col className="rowDesign" span={10}>
          <div id="imgBackground"></div>
        </Col>
        <Col className="rowDesign" span={1}></Col>
        <Col className="rowDesign" span={9}>
          <div id="componentText">
            <div id="title">Título</div>
            <div id="subtitle">Subtítulo</div>
          </div>
        </Col>
      </Row>
      {/* <div id="imgBackground"></div>
          <div id="title">Título</div>
          <div id="subtitle">Subtítulo</div> */}
    </div>
  );
}

export default DesignComponent;
