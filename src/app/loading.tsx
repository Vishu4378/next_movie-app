import React from "react";
import styles from "@/app/styles/common.module.css";
export default function loading() {
  return (
    <section className={styles.loading_section}>
      <div className={styles.loading}></div>
    </section>
  );
}
