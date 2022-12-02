import { Col, Row } from "antd";
import "./content.css";

function Content() {
  return(
    <div id="neverita">
    <Row justify="center">
        <Col span={19}>
          <div id="contentBackground"></div>
        </Col>
    </Row>
    </div>
  );
}

export default Content;