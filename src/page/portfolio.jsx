import React from "react";
import { Helmet } from "react-helmet";
import Separator from "../Component/Separator";
import image1 from "../image/poert1.png";
import image2 from "../image/port2.png";
import image3 from "../image/port3.png";
import hover from "../image/hover.png";

export default function Protfolio() {
  return (
    <>
      <Helmet>
        <title> Protfolio</title>
      </Helmet>
      <div className="padding-t-90px  ">
        <div className=" container">
          <h1 className="text-center text-uppercase my-3 py-2 ">
            portfolio component
          </h1>
          <Separator color="#2c3e50" />

          <div className="row py-5">
            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img src={image1} className="main-img w-100 rounded-4  " />
                <img src={hover} className="hover-img w-100 rounded-4 " />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img src={image2} className="main-img w-100 rounded-4 " />
                <img src={hover} className="hover-img w-100 rounded-4 " />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img src={image3} className="main-img w-100 rounded-4 " />
                <img src={hover} className="hover-img w-100 rounded-4 " />
              </div>
            </div>
            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img src={image1} className="main-img w-100 rounded-4 " />
                <img src={hover} className="hover-img w-100 rounded-4 " />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img src={image2} className="main-img w-100 rounded-4 " />
                <img src={hover} className="hover-img w-100 rounded-4 " />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img src={image3} className="main-img w-100 rounded-4 " />
                <img src={hover} className="hover-img w-100 rounded-4 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
