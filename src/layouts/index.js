import 'normalize.css/normalize.css';
import '../styles/main.css';
import React from "react";
import Link from "gatsby-link";
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import Header from '../components/Header';

const styles = {
    listItem: {
        display: 'inline-block',
        marginRight: '1rem'
    },
    siteTitleLink: {
        textShadow: 'none',
        backgroundImage: 'none'
    },
    siteTitle: {
        display: 'inline'
    },
    list: {
        listStyle: 'none',
        float: 'right'
    },
    main: {
        padding: '5px'
    }
};

const ListLink = props => (
  <li style={styles.listItem}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
);

export default ({ children, data }) => (
    <Wrapper>
        <Header>
            <Link to="/" style={styles.siteTitleLink}>
                <h3 style={styles.siteTitle}>{data.site.siteMetadata.title}</h3>
            </Link>
            {/* <ul style={styles.list}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul> */}
        </Header>
        <main style={styles.main}>{children()}</main>
        <Footer>
            <small>{data.site.siteMetadata.title}</small>
        </Footer>
    </Wrapper>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`