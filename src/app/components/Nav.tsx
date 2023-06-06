import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className="">
        <ul className={styles.navbarList}>
          <li className={styles.navbarItems}>
            <Link className={styles.navbarLink} href={"/"}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItems}>
            <Link className={styles.navbarLink} href={"/about"}>
              About
            </Link>
          </li>
          <li className={styles.navbarItems}>
            <Link className={styles.navbarLink} href={"/movie"}>
              Movie
            </Link>
          </li>
          <li className={styles.navbarItems}>
            <Link className={styles.navbarLink} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
