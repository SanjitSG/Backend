import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import CreateUser from "./components/CreateUser";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <ToastContainer
          position="bottom-center"
          theme="colored"
        />
        <Routes>
          <Route
            path="/"
            element={<PostList />}
          />
          <Route
            path="/posts"
            element={<CreatePost />}
          />

          <Route
            path="/:id"
            element={<EditPost />}
          />

          <Route
            path="/users"
            element={<CreateUser />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
