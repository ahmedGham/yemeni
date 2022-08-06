import React from "react";
import ContactList from "../components/contacts/ContactList";
import Card from "../components/UI/Card";
import Section from "../components/UI/Section";
import { useTranslation } from "react-i18next";

const Contact = () => {
      const [t, i18n] = useTranslation();

  return (
    <div>
      <Section title={t("contacts.title")} description={t("contacts.desc")}>
        <ContactList />
      </Section>
      <Section title={t("map.title")} description={t("map.desc")}>
        <div className="map-container">
          <Card>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126.19225359205976!2d30.30952384098681!3d59.96408260314977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696316bcd08d585%3A0x48cea8d03f338d4b!2z0JrRgNCw0YHQvdGM0Lkg0LzQvtGA0LU!5e0!3m2!1sar!2sru!4v1653858063785!5m2!1sar!2sru"
              width="1000"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
