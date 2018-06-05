import 'normalize.css/normalize.css';
import '../styles/main.css';
import React from "react";
import Head from '../components/Head';
import Header from '../components/Header';

export default ({ children, data }) => (
    <div>
        <Head title={data.site.siteMetadata.title} />
        <Header siteMetadata={data.site.siteMetadata}/>
        {children()}
    </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;