import React, { useState } from "react";

const CreatePost = () => {
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
  });
  return (
    <div className="container">
      <h2 className="display-5 text-center">Create Post</h2>
      <hr />
      <form action="">
        <div className="mb-3">
          <label for="username">Username</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            readonly
          />
          <label for="description">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            className="form-control"
            name="duration"
            placeholder="Duration"
          />
          <label htmlFor="date">Date</label>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
