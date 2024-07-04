import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
          >
            Post Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                to={"/"}
                className="nav-link active"
                aria-current="page"
              >
                Post List
              </Link>
              <Link
                to={"/posts"}
                className="nav-link"
              >
                Create Post
              </Link>
              <Link
                to={"/users"}
                className="nav-link"
              >
                Create User
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
