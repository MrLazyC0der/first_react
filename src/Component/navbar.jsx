import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  text-white fixed-top  py-4">
        <div className="container">
          <Link className=" fs-2 text-uppercase " to="/home">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto fs-6 text-uppercase  ">
              <NavLink className="nav-link mx-2  " to="/about">
                about
              </NavLink>
              <NavLink className="nav-link mx-2" to="/portfolio">
                portfolio
              </NavLink>
              <NavLink className="nav-link mx-2" to="/contact">
                contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


// 
// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`navbar navbar-expand-lg fixed-top text-white ${
//           isScrolled ? "scrolled-navbar" : "default-navbar"
//         }`}
//       >
//         <div className="container">
//           <Link className="fs-2 text-uppercase" to="/home">
//             Start Framework
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav ms-auto fs-6 text-uppercase">
//               <NavLink className="nav-link mx-2" to="/about">
//                 about
//               </NavLink>
//               <NavLink className="nav-link mx-2" to="/portfolio">
//                 portfolio
//               </NavLink>
//               <NavLink className="nav-link mx-2" to="/contact">
//                 contact
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
