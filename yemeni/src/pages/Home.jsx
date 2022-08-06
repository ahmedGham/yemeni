import React from "react";
import CategoriesList from "../components/categories/CategoriesList";
import ServicesList from "../components/features/ServicesList";
import Hero from "../components/Hero";
import Carousel from "../components/reviews/Carousel";
import Section from "../components/UI/Section";
import { useTranslation } from "react-i18next";
const Home = () => {
    const [t, i18n] = useTranslation();

  return (
    <div>
      <Hero />
      <Section title={t("services.title")} description={t("services.desc")}>
        <ServicesList />
      </Section>
      <Section title={t("categories.title")} description={t("categories.desc")}>
        <CategoriesList />
      </Section>
      <Section
        title={t("reviews.title")}
        description={t("reviews.desc")}
        className="reviews"
      >
        <Carousel />
      </Section>
    </div>
  );
};

export default Home;
