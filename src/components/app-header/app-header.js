import React from "react";

import "./app-header.css";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    color: ${(props) => (props.colored ? "red" : "black")};
    font-size: 26px;
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({ likes, postsCount }) => {
  return (
    <Header as="a">
      <h1> Name and Surname </h1>{" "}
      <h2>
        {" "}
        Amount of likes {likes}, amount of posts is {postsCount}
      </h2>{" "}
    </Header>
  );
};

export default AppHeader;
