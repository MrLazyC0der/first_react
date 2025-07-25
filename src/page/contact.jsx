import React from "react";
import Separator from "../Component/Separator";
import { Helmet } from "react-helmet";

export default function contact() {
  return (
    <>
      <Helmet>
        <title> Contact</title>
      </Helmet>
      <div className="pt-4 conatct">
        <div className="container mt-5 pt-5 text-center">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            conatct section
          </h2>
          <Separator color="#2c3e50" />

          <div className="row justify-content-center">
            <div className="col-12 col-md-7">
              <form className="p-3 mt-5 w-100 mx-auto">
                <div className="form-group position-relative my-5">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-bottom-sides floating-input"
                    id="userName"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="userName" className="floating-label">
                    User Name
                  </label>
                </div>

                <div className="form-group position-relative my-5">
                  <input
                    type="text"
                    className="form-control border-0 border-bottom rounded-bottom-sides floating-input"
                    id="userAge"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="userAge" className="floating-label">
                    User Age
                  </label>
                </div>

                <div className="form-group position-relative my-5">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom rounded-bottom-sides floating-input"
                    id="userEmail"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="userEmail" className="floating-label">
                    User Email
                  </label>
                </div>

                <div className="form-group position-relative my-5">
                  <input
                    type="password"
                    className="form-control border-0 border-bottom rounded-bottom-sides floating-input"
                    id="userPassword"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="userPassword" className="floating-label">
                    Password
                  </label>
                </div>

                <div className="text-start pb-5">
                  <button className="btn mt-4 text-white btn-1abc9c">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
