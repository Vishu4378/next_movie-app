import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
export default function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href={"/"}>
          <Image
            src={"/icon.png"}
            alt="navicon"
            width={150}
            height={90}
          ></Image>
        </Link>
      </div>
      <Nav />
    </header>
  );
}
