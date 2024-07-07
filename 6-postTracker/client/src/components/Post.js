import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { RiEditBoxLine } from "react-icons/ri";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
const Post = ({ post, deletePost }) => {
  const { _id, username, description, duration, date } = post;

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={`/${_id}`}>
          <RiEditBoxLine className="text-info fs-4" />
        </Link>
        <IoEllipsisVerticalOutline />
        <a
          href="/"
          onClick={() => deletePost(_id)}
        >
          <MdDelete className="text-danger fs-4" />
        </a>
      </td>
    </tr>
  );
};

export default Post;
