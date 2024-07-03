export const createPost = (req, res) => {
  res.status(200).send("<h1>Post created successfully</h1>");
};

export const getAllPosts = (req, res) => {
  res.status(200).send("<h1>get all posts</h1>");
};

export const getSinglePost = (req, res) => {
  res.status(200).send("<h1>Post created successfully</h1>");
};

export const updatePost = (req, res) => {
  res.status(200).send("<h1>Post updated successfully</h1>");
};

export const deletePost = (req, res) => {
  res.status(200).send("<h1>Post deleted successfully</h1>");
};
