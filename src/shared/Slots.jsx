import { Col, Progress, Row } from "antd";
import React from "react";
import { blue, red, green } from "@ant-design/colors";

const Slots = ({ max, value, min }) => {
  const percent = Math.ceil((value * 100) / max);
  let status = "";
  let color = blue;
  if (value < min) status = "exception";
  if (value > min && value < max) status = "active";
  if (value === max) color = green;
  if (value > max) {
    status = "exception";
    color = red;
  }
  const colorArray = Array(value).fill(color[4]);
  return (
    <Row wrap={false}>
      <Col>
        <Progress
          {...{ status, percent }}
          steps={max}
          showInfo={false}
          strokeColor={colorArray}
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
