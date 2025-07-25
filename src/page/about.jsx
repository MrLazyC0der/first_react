import React from "react";
import Separator from "../Component/Separator";
import { Helmet } from "react-helmet";

export default function about() {
  return (
    <>
      <Helmet>
        <title> About</title>
      </Helmet>
      <div className="padding-t-90px my-about ">
        <div className=" container-md">
          <h1 className="text-center text-uppercase text-white">
            about component
          </h1>
          <Separator />
          <div className="row">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
