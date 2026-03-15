import { FC } from "react";
import { default as NextHead } from "next/head";

export const Head: FC<any> = ({ title }) => (
  <NextHead>
    <meta name="p:domain_verify" content="c35f4a3ff9f84cc23df833202f6a8cc5" />
    <title>{title}</title>
  </NextHead>
);
