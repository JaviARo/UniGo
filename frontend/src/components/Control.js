import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import "./control.css";

export function Header() {
  return (
    <div id="header">
      <Row align="middle">
        <Col className="row" span={6}>
          <img className="icon" src="/img/info.png" alt="" />
        </Col>
        <Col className="row" span={12}></Col>
        <Col className="row" span={6}>
          <Link to="/config">
            <img className="icon" src="/img/config.png" alt="" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export function Footer() {
  return (
    <div id="footer">
      <Link to="/designs">
        <img className="icon" src="/img/logo1.png" alt="" />
      </Link>
    </div>
  );
}

export function HomeFooter() {
  return (
    <div id="homeFooter">
      <Link to="/">
        <img className="icon" src="/img/logo1.png" alt="" />
      </Link>
    </div>
  );
}
