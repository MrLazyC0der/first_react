import React from "react";

export default function Info() {
  return (
    <>
      <div className="my-info ">
        <div className="container py-5  text-center ">
          <div className="row">
            <div className="col-md-4 py-4  ">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 py-4 ">
              <h3>AROUND THE WEB</h3>
              {/*  */}
              <div className="d-flex justify-content-center align-items-center  my-3">
                <div className="d-flex align-items-center justify-content-center border  rounded-circle icons ">
                  <i className="fa-brands fa-facebook-f fs-6"></i>
                </div>
                <div className="d-flex align-items-center justify-content-center border  rounded-circle icons">
                  <i className="fa-brands fa-twitter fs-6"></i>
                </div>
                <div className="d-flex align-items-center justify-content-center border  rounded-circle icons">
                  <i className="fa-brands fa-linkedin-in fs-6"></i>
                </div>
                <div className="d-flex align-items-center justify-content-center border  rounded-circle icons">
                  <i className="fa-solid fa-globe fs-6"></i>
                </div>
              </div>

              {/*  */}
            </div>
            <div className="col-md-4 py-4 ">
              <div className="text-center text-white ">
                <h3 className="text-uppercase text-white">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
