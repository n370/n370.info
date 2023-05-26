import React, { useEffect } from "react";
import { Link } from "gatsby-link";
import styled from "styled-components";

function setupDisqs({ url, identifier, title, shortname }) {
  // https://help.disqus.com/en/articles/1717163-using-disqus-on-ajax-sites

  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  window.disqus_identifier = identifier;
  window.disqus_url = url;

  window.disqus_config = function () {
    // this.language = "en";
  };

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function () {
    var dsq = document.createElement("script");
    dsq.type = "text/javascript";
    dsq.async = true;
    dsq.src = "http://" + shortname + ".disqus.com/embed.js";
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(dsq);
  })();

  /* * * Disqus Reset Function * * */
  window.reset = function (newIdentifier, newUrl, newTitle, newLanguage) {
    window.DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = newIdentifier;
        this.page.url = newUrl;
        this.page.title = newTitle;
        this.language = newLanguage;
      },
    });
  };
}

const UnstyledPost = ({ postData, next, previous, className, children }) => {
  const disqus_shortname = "n370";

  useEffect(() => {
    setupDisqs({
      shortname: disqus_shortname,
      title: postData.frontmatter.Title,
      url: `https://n370.info${postData.fields.slug}`,
      identifier: postData.fields.slug,
    });
  }, [postData.fields.slug, postData.frontmatter.Title]);

  return (
    <div className={className}>
      <h1>{postData.frontmatter.Title}</h1>
      <div className="markdown">{children}</div>
      <div className="pagination">
        <div>
          {previous && (
            <Link to={previous.fields.slug}>
              Previous: {previous.frontmatter.Title}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={next.fields.slug}>Next: {next.frontmatter.Title}</Link>
          )}
        </div>
      </div>
      <div id="disqus_thread"></div>
    </div>
  );
};

export default styled(UnstyledPost)`
  padding: 0 25%;

  :not(.gatsby-highlight) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Lexend", sans-serif;
    }

    h1 {
      font-size: 3.2em;
      margin-bottom: 1.3em;
    }

    p,
    span :not(.gatsby-highlight) & {
      margin: 2em 0;
      font-family: "PT Serif", serif;
      font-size: 1.25em;
      line-height: 1.45;
    }
  }

  img {
    width: 100%;
  }

  #disqus_thread {
    margin-top: 150px;
  }

  .pagination {
    display: flex;
    > * {
      flex-basis: 50%;
    }
    > *:first-child {
      padding: 0 10% 0 0;
    }
    > *:last-child {
      padding: 0 0 0 10%;
      text-align: right;
    }
  }

  @media (min-width: 720px) {
  }
`;
