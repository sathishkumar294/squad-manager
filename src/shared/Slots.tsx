import { blue, green, red } from "@ant-design/colors";
import { Progress, ProgressProps, Space } from "antd";
import React from "react";

const Slots: React.FC<{ min: number; max: number; value: number }> = ({
  max,
  value,
  min,
}) => {
  const percent = Math.ceil((value * 100) / max);
  let status: ProgressProps["status"] = "normal";
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
    <Space wrap={false} size="small" align="end" style={{ width: "100%" }}>
      <Progress
        {...{ status, percent }}
        steps={max}
        showInfo={false}
        strokeColor={colorArray}
      ></Progress>
      <span>
        {value}/{max}
      </span>
    </Space>
  );
};

export default Slots;
