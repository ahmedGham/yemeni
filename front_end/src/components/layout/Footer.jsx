import React from "react";
import Container from "../UI/Container";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [t, i18n] = useTranslation();

  const openNewTab = (url) => window.open(url, "_blank");

  return (
    <footer className="footer">
      <Container>
        <div className="flexbox-3">
          <div className="box">
            <h4>{`${t("footer.contact")} :`}</h4>
            <ul className="footer-list">
              <li>
                <div className="contact-item">
                  <p>email@gmail.com</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <p>+776441777</p>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <p style={{ fontSize: "14px" }}>
                    Большой просп. Петроградской стороны, 67
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="box">
            <h4>{`${t("footer.link")} :`}</h4>
            <ul className="footer-list">
              <li>
                <Link to="/" className="footer-link">
                  {t("footer.links.home")}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="footer-link">
                  {t("footer.links.menu")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  {t("footer.links.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <p>{t("footer.desc")}</p>
            <div className="social-media">
              <h5>{`${t("footer.social_media")} :`}</h5>
              <ul className="social-media-icons">
                <li>
                  <BsInstagram
                    className="social-media-icon"
                    onClick={() =>
                      openNewTab(
                        "https://www.instagram.com/invites/contact/?i=1fqnpytjz8za3&utm_content=mcqe7f6"
                      )
                    }
                  />
                </li>
                <li>
                  <BsFacebook
                    className="social-media-icon"
                    onClick={() =>
                      openNewTab("https://m.facebook.com/redseaspb/?ref=py_c")
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="copy-rights">
        <Container>
          <p>
            <span className="colored-text">Yemeni resaurant</span> - Copyright 2022
            - All Rights Reserved | Design & Developed by{" "}
            <span className="colored-text">Akhmedchek</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
