import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
const PostList = () => {
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((p) => p._id !== id));
      axios
        .delete(`http://localhost:5000/posts/${id}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((postData) => {
        setPosts(postData.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (posts.length === 0) return null;

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Post
              key={post._id}
              post={post}
              deletePost={deletePost}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
