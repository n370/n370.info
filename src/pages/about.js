import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ExternalLink from "../components/ExternalLink";
import GPG from "../components/GPG";
import styled from "styled-components";

const UnstyledAboutPage = ({ className }) => {
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
    <Layout>
      <div className={className}>
        <img
          className="profile-image"
          src="/images/pages/about/profile.jpeg"
          alt="Dylson Valente Neto"
        />
        <h3>Hi there! welcome to my website.</h3>
        <p>
          My name is Dylson, also know on the Internet as |\|370, n370 or
          n370n370.
        </p>
        <p>
          For over 20 years I have dedicated myself to build creative and
          network-connected computing solutions for clients big and small all
          around the world. {"I'm"} passionate about doing it, {"let's"} talk.
          You can text me on <i>ama at n370.info</i> or in any of the social
          channels linked bellow.
        </p>
        <p>I hope you like what you find here.</p>
        <h4>Elsewhere</h4>
        {social.map(({ url, name }) => (
          <>
            <ExternalLink
              className="social-link"
              key={name}
              alt={name}
              href={url}
            >
              {name}
            </ExternalLink>{" "}
          </>
        ))}
        <div className="gpg">
          <h4>GPG Key</h4>
          <GPG />
        </div>
      </div>
    </Layout>
  );
};

export default styled(UnstyledAboutPage)`
  .gpg {
    margin-top: 3em;
  }

  .profile-image {
    width: 100%;
    border-radius: 2px;
    filter: contrast(90%) brightness(90%);
  }

  .social-link {
    margin-right: 0.5em;
  }

  @media (min-width: 400px) {
    width: 50%;

    .profile-image {
      width: 200px;
    }
  }
`;
