import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, NavDropdown, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavHashLink as LinkBook } from "react-router-hash-link";
import { useLocation, useHistory, Link } from "react-router-dom";
import "../style/Header.css";
const Header = () => {
  const location = useLocation();
  const [navClass, setNavClass] = useState("mynav");

  const history = useHistory();
  const [toogleClassName, settoogleClassName] = useState(" ");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const mynav = window.scrollY < 100 ? "mynav" : "mynav1";
      const toogleClass = window.scrollY < 100 ? " " : "blacktoggle";
      setNavClass(mynav);
      settoogleClassName(toogleClass);
    });
  }, []);

  return (
    <div className="header">
      <div className="sm-mx-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-9 col-sm-9 col-xs-12">
              <ul className="top-contact">
                <li>
                  <a href="#" className="text-white">
                    <i
                      className="fas fa-phone mr-3"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    +1(765) 696-9767
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    <i
                      className="fas fa-envelope mr-3"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    brijalpate291@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12">
              <ul className="social-contact ml-auto">
                <li style={{ "margin-right": "0px !important" }}>
                  <a
                    href="https://www.linkedin.com/in/brijal-patel-52159b210"
                    className="text-white"
                  >
                    <i
                      className="fab fa-linkedin"
                      style={{ padding: "0px" }}
                    ></i>{" "}
                  </a>
                </li>
                <li style={{ "margin-right": "0px !important" }}>
                  <a href="https://github.com/brijal29" className="text-white">
                    <i className="fab fa-github" style={{ padding: "0px" }}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
