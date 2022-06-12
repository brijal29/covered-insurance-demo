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
                    <span className="myLogo">
                      <b>BP</b>
                    </span>
                    &nbsp;&nbsp;&nbsp; Covered Insurance Demo
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
