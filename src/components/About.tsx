"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "./ExternalLink";
// import { GPG } from "./GPG";
import styles from "./About.module.css";

export const About = ({}) => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    run();

    async function run() {
      const res = await fetch("/data/social.json");
      const body = await res.json();
      setSocial(body.data);
    }
  }, []);

  return (
    <div className={styles.main}>
      <Image
        className={styles["profile-image"]}
        width={256}
        height={256}
        src="/images/pages/about/profile.jpeg"
        alt="Dylson Valente Neto"
      />
      <h3>
        Hello there! welcome to my website. {"I'm"} glad {"you're"} here.
      </h3>
      <p>
        For over 20 years I have used the Internet as a medium to build value for
        individuals and organizations all over the world. This site is an entrypoint
        to that work.
      </p>
      <p>
        If you want to say hi, please send an email to <i>ama at n370.info</i>.
      </p>
      <p>
        Yours truly,
        <br />
        <br />
        Dylson.
      </p>
      <h4>Elsewhere</h4>
      <div>
        {social
          .filter(({ visibility }) => visibility === "public")
          .map(({ url, name }) => (
            <ExternalLink
              className={styles["social-link"]}
              key={name}
              alt={name}
              href={url}
            >
              {name}
            </ExternalLink>
          ))}{" "}
      </div>
      {/* <div className={styles.gpg}>
        <h4>GPG Key</h4>
        <GPG />
      </div> */}
    </div>
  );
};
