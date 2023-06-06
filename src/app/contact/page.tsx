import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import { ContactForm } from "../components/ContactForm";
export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We&#39;d love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.2132508260022!2d77.92228547407636!3d30.3955419495679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2b55e7eb948d%3A0x63119bba1ed5322!2sBhauwala%2C%20Uttarakhand%20248007!5e1!3m2!1sen!2sin!4v1685867021481!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        className={styles.mapping}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
