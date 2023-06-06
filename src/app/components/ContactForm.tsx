"use client";

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";

import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Content_type: "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
    } catch (error) {
      console.log("error contact form", error);
    }
  };
  return (
    <>
      <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <label htmlFor="username" className={styles.label}>
            Name
            <input
              value={user.username}
              className={mulish.className}
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              onChange={handleChange}
              autoComplete={"off"}
              required
            ></input>
          </label>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              value={user.email}
              className={mulish.className}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              autoComplete={"off"}
              required
            ></input>
          </label>
          <label htmlFor="phone" className={styles.label}>
            Phone No
            <input
              value={user.phone}
              className={mulish.className}
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              onChange={handleChange}
              autoComplete={"off"}
              required
            ></input>
          </label>
          <label htmlFor="message" className={styles.label}>
            Message
            <textarea
              value={user.message}
              className={mulish.className}
              rows={5}
              name="message"
              id="message"
              placeholder="Enter your message"
              onChange={handleChange}
              autoComplete={"off"}
              required
            ></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Send message</button>
        </div>
      </form>
    </>
  );
};
