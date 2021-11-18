import React from "react";
import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = ({ posts }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} classNames="list-group-item">
        <PostListItem label={itemProps.label} important={itemProps.important} />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
