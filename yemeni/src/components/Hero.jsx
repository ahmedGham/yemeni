import React from "react";
import Navbar from "./layout/Navbar";
import Button from "./UI/Button";
import Container from "./UI/Container";
import { useTranslation } from "react-i18next";
// https://eda.yandex.ru/spb/r/krasnoe_more_shaverma?placeSlug=krasnoe_more_shaverma_bolshoj_prospekt_petrogradskoj_storony_67&shippingType=delivery
const Hero = () => {
  const [t, i18n] = useTranslation();
  const openNewTab = (url) => window.open(url, "_blank");
  return (
    <div className="hero">
      <Navbar />
      <Container>
        <div className="welcome">
          <h1>{t("hero.headLine")}</h1>
          <p>{t("hero.secLine")}</p>
          <div className="btns">
            <Button
              className="order-btn"
              onClick={() =>
                openNewTab(
                  "https://eda.yandex.ru/spb/r/krasnoe_more_shaverma?placeSlug=krasnoe_more_shaverma_bolshoj_prospekt_petrogradskoj_storony_67&shippingType=delivery"
                )
              }
            >
              {t("hero.buttons.yandex")}
            </Button>
            <Button className="menu-btn" href={""}>
              {t("hero.buttons.delivary")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
