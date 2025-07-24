import React from "react";

export default function Separator({ color = "#fff" }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3">
      <div className="my-line" style={{ backgroundColor: color }}></div>
      <i className="fa fa-star fs-5" style={{ color: color }}></i>
      <div className="my-line" style={{ backgroundColor: color }}></div>
    </div>
  );
}
