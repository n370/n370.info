import React from "react";
import styled from 'styled-components';
import Link from "gatsby-link";

const UnstyledPostList = ({ className, postList }) => (
  <div className={className}>
      {postList.map(({ node }) => (
        <Link
          className="link"
          to={node.fields.slug}
          key={node.id}>
            <span className="date">{node.frontmatter.date}</span>
            <h3 className="title">{node.frontmatter.title}</h3>
        </Link>
      ))}
  </div>
);

export default styled(UnstyledPostList)`
  min-width: 640px;
  margin: 100px 30% 50px 20%;
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
    padding-left: 10%;
    font-family: 'Viga', sans-serif;
  }
`;