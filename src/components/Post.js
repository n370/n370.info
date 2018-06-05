import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import Main from './Main';

class UnstyledPost extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.setupDisqs({
      title: this.props.postData.frontmatter.title,
      url: `https://n370.info/${this.props.postData.fields.slug}`,
      identifier: this.props.postData.frontmatter.uuid
    });
  }

  setupDisqs ({ url, identifier, title }) {
    // RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    // LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    var disqus_config = function () {
      this.page.title = title;
      this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://n370.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  render () {
    const postData = this.props.postData;
    const next = this.props.next;
    const previous = this.props.previous;
    const className = this.props.className;
    return (
      <Main className={className}>
          <div className="pagination">
            <div>{previous && <Link to={previous.fields.slug}>Previous: {previous.frontmatter.title}</Link>}</div>
            <div>{next && <Link to={next.fields.slug}>Next: {next.frontmatter.title}</Link>}</div>
          </div>
          <h1>{postData.frontmatter.title}</h1>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: postData.html }} />
          <div className="pagination">
            <div>{previous && <Link to={previous.fields.slug}>Previous: {previous.frontmatter.title}</Link>}</div>
            <div>{next && <Link to={next.fields.slug}>Next: {next.frontmatter.title}</Link>}</div>
          </div>
          <div id="disqus_thread"></div>
      </Main>
    );
  }
}

export default styled(UnstyledPost)`
  a {
    color: darkcyan;
  }
  p {
    font-size: 1.4rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Viga', sans-serif;
  }
  h1,
  #disqus_thread,
  .markdown > *:not(iframe),
  .pagination {
    margin: 50px 25%;
  }
  > div > .gatsby-highlight {
    margin: 50px 20% 50px 20%;
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
    margin: 0 25%;
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
`;