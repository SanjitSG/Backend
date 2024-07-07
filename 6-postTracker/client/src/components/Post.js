import React from "react";
import { Link } from "react-router-dom";
const Post = ({ post, deletePost }) => {
  const { _id, username, description, duration, date } = post;

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={`/${_id}`}>edit</Link> |{" "}
        <a
          href="/"
          onClick={() => deletePost(_id)}
        >
          remove
        </a>
      </td>
    </tr>
  );
};

export default Post;
