import { Col, Row } from "antd";
import "./control.css";

export function Header() {
  return (
    <div id="header">
      <Row align="middle">
        <Col className="row" span={6}>
          <img class="icon" src="/img/info.png" alt="" />
        </Col>
        <Col className="row" span={12}></Col>
        <Col className="row" span={6}>
          <img class="icon" src="/img/config.png" alt="" />
        </Col>
      </Row>
    </div>
  );
}

export function Footer() {
  return (
    <div id="footer">
      <img class="icon" src="/img/logo1.png" alt="" />
    </div>
  );
}
