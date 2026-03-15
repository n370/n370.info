
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'
import { ExternalLink } from "./ExternalLink";
import { GPG } from "./GPG";
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
      <h3>Hi there! welcome to my website.</h3>
      <p>
        My name is Dylson, also known on the Internet as |\|370, n370 or
        n370n370.
      </p>
      <p>
        For over 10 years I have dedicated myself to build creative and
        network-connected computing solutions for clients big and small all
        around the world. {"I'm"} passionate about it, {"let's"} talk. You can
        reach me on my e-mail <i>ama at n370.info</i> or any of the social
        channels linked bellow.
      </p>
      <p>I hope you find something interesting here.</p>
      <h4>Elsewhere</h4>
      <div>
        {social.map(({ url, name }) => (
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
      <div className={styles.gpg}>
        <h4>GPG Key</h4>
        <GPG />
      </div>
    </div>
  );
};
