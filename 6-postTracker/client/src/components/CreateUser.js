import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = { username: username };
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setUsername("");
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
