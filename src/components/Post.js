import React, { useEffect } from "react";
import { Link } from "gatsby-link";
import styled from "styled-components";
import Layout from "../layouts";

function setupDisqs({ url, identifier, title }) {
  // RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
  // LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
  function disqus_config() {
    this.page.title = title;
    this.page.url = url; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  }
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://n370.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
}

const UnstyledPost = ({ postData, next, previous, className, children }) => {
  useEffect(() => {
    setupDisqs({
      title: postData.frontmatter.Title,
      url: `https://n370.info/${postData.fields.slug}`,
      identifier: postData.frontmatter.uuid,
    });
  }, []);

  return (
    <Layout>
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
    </Layout>
  );
};

export default styled(UnstyledPost)`
  img {
    width: 100%;
  }
  a {
    color: darkcyan;
  }
  p {
    font-size: 1.4rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Viga", sans-serif;
  }
  h1,
  #disqus_thread,
  .markdown,
  .pagination {
    margin: 50px 5%;
  }
  > div > .gatsby-highlight {
    margin: 50px 5%;
    border-radius: 5px;
    box-shadow: 1px 2px 7px 0px #d5d5d5;
    pre {
      border-radius: inherit;
    }
  }
  #disqus_thread {
    margin-top: 150px;
  }
  .pagination {
    margin: 0 5%;
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
    h1,
    #disqus_thread,
    .markdown,
    .pagination {
      margin: 50px 25%;
    }
    > div > .gatsby-highlight {
      margin: 50px 20%;
    }
    .pagination {
      margin: 0 25%;
    }
  }
`;
