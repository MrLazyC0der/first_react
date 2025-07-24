import React from "react";
import Separator from "../Component/Separator";

export default function Hero() {
  return (
    <>
      <div className="hero-section text-center py-5 mt-5 text-white bg-teal">
        <div className="pt-5 m-5 image-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/924/924915.png"
            alt="avatar"
            className="rounded-circle   "
          />
        </div>

        <h1 className="fw-bold text-uppercase mb-3 text-white">
          Start Framework
        </h1>
        <Separator />

        <p className="mt-3 fs-6 mb-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
