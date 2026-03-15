import { ExternalLink } from "../../components/ExternalLink";
import styles from "./page.module.css";

export const ColophonPage = ({}) => {
  return (
    <div className={styles.main}>
      <p>
        This webpage was built using{" "}
        <ExternalLink href="https://www.typescriptlang.org/">Typescript</ExternalLink>{" "}and{" "}
        <ExternalLink href="https://nextjs.org/">Next.js.</ExternalLink>
        <br />
        It is hosted on{" "}
        <ExternalLink href="https://www.netlify.com/">Netlify</ExternalLink> and
        its MIT licensed source code is available on{" "}
        <ExternalLink href="https://www.github.com/n370/n370.info">
          GitHub
        </ExternalLink>
        .
      </p>
    </div>
  );
};

export default ColophonPage;
