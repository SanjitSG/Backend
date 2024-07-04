const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
          >
            Post Tracker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
              >
                Post List
              </a>
              <a
                class="nav-link"
                href="#"
              >
                Create Post
              </a>
              <a
                class="nav-link"
                href="#"
              >
                Create User
              </a>
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
