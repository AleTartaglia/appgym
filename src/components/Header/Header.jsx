import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              activeClass="active"
              spay={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spay={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              spay={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spay={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spay={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
