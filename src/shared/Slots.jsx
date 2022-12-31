import { Col, Progress, Row } from "antd";
import React from "react";

const Slots = ({ max, value, min }) => {
  const percent = Math.ceil((value * 100) / max);
  let status = "";
  if (value < min) status = "exception";
  if (value > min && value < max) status = "active";
  if (value > max) status = "exception";
  return (
    <Row wrap={false}>
      <Col>
        <Progress
          {...{ status, percent }}
          steps={max}
          showInfo={false}
        ></Progress>
      </Col>
      <Col>
        <span>
          {value}/{max}
        </span>
      </Col>
    </Row>
  );
};

export default Slots;
