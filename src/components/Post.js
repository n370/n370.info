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
    dsq.src = "https://" + shortname + ".disqus.com/embed.js";
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
  padding: 0 5%;

  img {
    width: 100%;
  }

  #disqus_thread {
    margin-top: 150px;
  }

  .pagination {
    margin: 10em 0;

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

  .math {
    margin: 5em 0;
  }

  .katex {
    font-size: 1.8em;
  }

  @media (min-width: 720px) {
    padding: 0 25%;
  }
`;
