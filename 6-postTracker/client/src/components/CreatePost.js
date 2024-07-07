import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import { toast } from "react-toastify";
const CreatePost = () => {
  const [post, setPost] = useState({
    username: "",
    description: "",
    duration: "",
    date: new Date(),
    users: [],
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        if (res.data.users.length > 0) {
          setPost((prev) => {
            return {
              ...prev,
              users: res.data.users.map((user) => user.username),
              username: res.data.users[0].username,
            };
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: post.username,
      description: post.description,
      duration: post.duration,
      date: post.date,
    };

    axios
      .post("http://localhost:5000/posts/add", newPost)
      .then((res) => toast.success("Post created successfully"))
      .catch((err) => toast.error("Post not created"));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleChangeDate = (date) => {
    setPost((prev) => {
      return {
        ...prev,
        date: date,
      };
    });
  };
  return (
    <div className="container">
      <h2 className="display-5 text-center">Create Post</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <select
            required
            className="form-control"
            name="username"
            value={post.username}
            onChange={handleChange}
          >
            {post.users.map((user, i) => {
              return (
                <option
                  key={i}
                  value={user}
                >
                  {user}
                </option>
              );
            })}
          </select>

          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
            value={post.description}
            onChange={handleChange}
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            className="form-control"
            name="duration"
            placeholder="Duration"
            value={post.duration}
            onChange={handleChange}
          />
          <label htmlFor="date">Date</label>
          <DatePicker
            selected={post.date}
            className="form-control"
            onChange={handleChangeDate}
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
