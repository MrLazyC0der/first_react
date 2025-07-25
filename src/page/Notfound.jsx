import React from "react";
import { Helmet } from "react-helmet";

export default function Notfound() {
  return (
    <>
      <Helmet>
        <title>Notfound</title>
      </Helmet>
      <div>
        <img src="/image/404_1.webp" className="w-100 vh-100" alt="" />
      </div>
    </>
  );
}
