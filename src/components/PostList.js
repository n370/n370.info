import React from "react";
import styled from 'styled-components';
import Link from "gatsby-link";
import Main from './Main';

const UnstyledPostList = ({ className, postList }) => (
  <div className={className}>
    {postList.map(({ node }) => (
      <Link
        className="link"
        to={node.fields.slug}
        key={node.id}
      >
          <span className="date">{node.frontmatter.Date}</span>
          <h3 className="title">{node.frontmatter.Title}</h3>
      </Link>
    ))}
  </div>
);

export default styled(UnstyledPostList)`
  margin: 30px 5%;
  .link {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: inherit;
    &:hover {
      background: #f7f7f7;
    }
  }
  .date {
    width: 25%;
    color: darkcyan;
    text-align: right;
  }
  .title {
    width: 70%;
    padding: 0 0 0 10%;
  }
  @media (min-width: 720px) {
    min-width: 640px;
    .title {
      padding: 0 25% 0 10%;
    }
  }
`;
