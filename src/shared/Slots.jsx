import { Progress } from "antd";
import React from "react";

const Slots = ({ max, value, min }) => {
  const percent = Math.ceil((value * 100) / max);
  let status = "";
  if (value < min) status = "exception";
  if (value > min && value < max) status = "active";
  if (value > max) status = "exception";
  return <Progress {...{ status, percent }}></Progress>;
};

export default Slots;
