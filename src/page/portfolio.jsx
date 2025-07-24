import React from "react";
import Separator from "../Component/Separator";

export default function portfolio() {
  return (
    <>
      <div className="padding-t-90px  ">
        <div className=" container">
          <h1 className="text-center text-uppercase my-3 py-2 ">
            portfolio component
          </h1>
          <Separator color="#2c3e50" />

          <div className="row py-5">
            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img
                  src="/image/poert1.png"
                  className="main-img w-100 rounded-4  "
                />
                <img
                  src="/image/errorrrr.png"
                  className="hover-img w-100 rounded-4 "
                />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img
                  src="/image/port2.png"
                  className="main-img w-100 rounded-4 "
                />
                <img
                  src="/image/errorrrr.png"
                  className="hover-img w-100 rounded-4 "
                />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img
                  src="/image/port3.png"
                  className="main-img w-100 rounded-4 "
                />
                <img
                  src="/image/errorrrr.png"
                  className="hover-img w-100 rounded-4 "
                />
              </div>
            </div>
            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img
                  src="/image/poert1.png"
                  className="main-img w-100 rounded-4 "
                />
                <img
                  src="/image/errorrrr.png"
                  className="hover-img w-100 rounded-4 "
                />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img
                  src="/image/port2.png"
                  className="main-img w-100 rounded-4 "
                />
                <img
                  src="/image/errorrrr.png"
                  className="hover-img w-100 rounded-4 "
                />
              </div>
            </div>

            <div className="col-md-4  ">
              <div className=" image-container my-4 rounded ">
                <img
                  src="/image/port3.png"
                  className="main-img w-100 rounded-4 "
                />
                <img
                  src="/image/errorrrr.png"
                  className="hover-img w-100 rounded-4 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
