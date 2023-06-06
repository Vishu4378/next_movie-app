import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

export interface JawSummaryType {
  id: number;
  type: string;
  title: string;
  backgroundImage: { url: string };
  synopsis: string;
}

interface MapElementProp {
  jawSummary: JawSummaryType;
}

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cf800ef7c4msha79bc7daf397b22p184855jsn1e29e6130cbf",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;
  // console.log(
  //   "maindata........................................",
  //   main_data[1].jawSummary.trackIds
  // );
  return (
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movies</h1>
        <div className={styles.card_section}>
          {main_data.map((cuurItem: MapElementProp, index: number) => {
            return (
              <div key={index}>
                <MovieCard {...cuurItem.jawSummary} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Movie;
