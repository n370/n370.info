import React from "react";
import styled from 'styled-components';
import Main from './Main';

class UnstyledPost extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.setupDisqs({
      url: "https://n370.info/",
      identifier: this.props.postData.frontmatter.title
    });
  }

  setupDisqs ({ url, identifier }) {
    // RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    // LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    var disqus_config = function () {
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
    const className = this.props.className;
    return (
      <Main className={className}>
          <h1>{postData.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.html }} />
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
  #disqus_thread, h1 {
    margin: 50px 25%;
  }
  #disqus_thread {
    margin-top: 150px;
  }
  > div > *:not(iframe) {
    margin: 50px 25%;
  }
  > div > .gatsby-highlight {
    margin: 50px 10%;
    border-radius: 5px;
    box-shadow: 1px 2px 7px 0px #d5d5d5;
    pre {
      border-radius: inherit;
    }
  }
`;