import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../UI/Container";
import { FaBars } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [showLangs, setShowLangs] = useState(false);
  const [t, i18n] = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const [outer, inner] = document.querySelectorAll(".header");
      outer.classList.add("display");
      inner.getElementsByClassName("container")[0].classList.add("white");
    } else {
      const nav = document.querySelector(".header");
      nav.classList.remove("display");
      nav.classList.remove("white");
    }
    window.scrollTo(0, 0);
  }, [location, showLangs]);

  return (
    <header className="header">
      <Container>
        <div className="logo">
          <p>{t("navbar.logo")}</p>
        </div>
        <nav>
          <ul className="link-list">
            <li>
              <Link
                to="/"
                className={`link ${location.pathname === "/" ? "active" : ""}`}
              >
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link to="/menu" className={`link ${location.pathname === "/menu" ? "active" : ""}`}>
                {t("navbar.menu")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`link ${location.pathname === "/contact" ? "active" : ""}`}>
                {t("navbar.contact")}
              </Link>
            </li>
            <li>
              <div className="trans">
                <BsTranslate
                  className="trans-icon"
                  onClick={() => {
                    setShowLangs(!showLangs);
                  }}
                />
                <div className={`langs ${showLangs && "show-langs"}`}>
                  <ul>
                    <li
                      className="lang"
                      onClick={() => {
                        i18n.changeLanguage("ar");
                        setShowLangs(!showLangs);
                      }}
                    >
                      عربي
                    </li>
                    <li
                      className="lang"
                      onClick={() => {
                        i18n.changeLanguage("ru");
                        setShowLangs(!showLangs);
                      }}
                    >
                      русский
                    </li>
                    <li
                      className="lang"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        setShowLangs(!showLangs);
                      }}
                    >
                      english
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
