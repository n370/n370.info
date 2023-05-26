import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby-link";

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
  .link {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: inherit;
    &:hover {
      background: rgba(255,255,255,0.1);
    }
  }
  .date {
    width: 25%;
    text-align: right;
  }
  .title {
    width: 70%;
    padding: 0 0 0 10%;
  }
  @media (max-width: 320px) {
  }
  @media (min-width: 720px) {
    .title {
      padding: 0 25% 0 10%;
    }
  }
`;
