import React from "react";
import Container from "./Container";

const Section = ({ children, title, description ,className}) => {

  return (
    <section className={`section ${className}`}>
      <Container>
        <div className="section-header">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
        {children}
      </Container>
    </section>
  );
};

export default Section;
