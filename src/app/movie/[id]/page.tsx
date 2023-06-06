import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import { JawSummaryType } from "../page";
interface Props {
  params: {
    id: string;
  };
}

const page = async ({ params }: Props) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cf800ef7c4msha79bc7daf397b22p184855jsn1e29e6130cbf",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data: JawSummaryType = data[0].details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix\<span>{main_data.type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={550}
            height={300}
          />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
