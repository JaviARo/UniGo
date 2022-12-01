import { Col, Row } from "antd";
import "./clothesComponent.css";

function ClothesComponent() {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={10}>
          <div class="canvas"></div>
        </Col>
        <Col className="gutter-row" span={10}>
          <div class="canvas"></div>
        </Col>
      </Row>
      {/* <Row justify="center">
        <Col span={9}>
          <div class="canvas"></div>
        </Col>
        <Col span={1}></Col>
        <Col span={9}>
          <div class="canvas"></div>
        </Col>
      </Row> */}
    </div>
  );
}

export default ClothesComponent;
