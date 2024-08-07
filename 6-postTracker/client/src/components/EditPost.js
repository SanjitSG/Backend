import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Datepicker from "react-datepicker";
import { toast } from "react-toastify";
import { SERVER_URL } from "../constants";
const EditPost = () => {
  const navigate = useNavigate();
  const [postBody, setPostBody] = useState([
    {
      username: "",
      description: "",
      duration: "",
      date: new Date(),
    },
  ]);
  const { username, description, duration, date } = postBody;
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to edit the post?")) {
      const updatedPost = {
        username: postBody.username,
        description: postBody.description,
        duration: postBody.duration,
        date: postBody.date,
      };
      axios
        .put(`${SERVER_URL}/posts/${id}`, updatedPost)
        .then((res) => {
          toast.info(res.data.message);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPostBody((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleChangeDate = (date) => {
    setPostBody((prev) => {
      return {
        ...prev,
        date: date,
      };
    });
  };
  useState(() => {
    axios
      .get(`${SERVER_URL}/posts`)
      .then((res) => setPostBody(res.data.data.filter((p) => p._id === id)[0]));
  }, [id]);
  if (!postBody) return null;

  return (
    <div className="container">
      <h2 className="display-5 text-center">Edit Post</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            className="form-control"
            name="duration"
            placeholder="Duration"
            value={duration}
            onChange={handleChange}
          />
          <label htmlFor="date">Date</label>
          <Datepicker
            selected={date}
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

export default EditPost;
