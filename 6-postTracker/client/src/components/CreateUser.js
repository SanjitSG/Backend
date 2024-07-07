import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = { username: username };
    if (username !== "") {
      axios
        .post("http://localhost:5000/users/add", user)
        .then((res) => {
          toast.info(`User: ${res.data.data} created successfully`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setUsername("");
          navigate("/");
        })
        .catch((err) => toast.error(`Error Code: ${err.response.data.message.code}`));
    } else {
      toast.error("username cannot be empty");
    }
  };

  return (
    <div className="container">
      <h2 className="display-2">Create User</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Enter username"
            aria-describedby="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
