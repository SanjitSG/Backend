export const getUser = (req, res) => {
  res.status(200).send("<h1>GET | SINGLE USER REQUEST RESPONSE ROUTE</h1>");
};

export const getUsers = (req, res) => {
  res.status(200).send("<h1>GET | All USERS REQUEST RESPONSE ROUTE</h1>");
};

export const createUser = (req, res) => {
  res.status(200).send("<h1>POST | CREATE USER REQUEST RESPONSE ROUTE</h1>");
};

export const updateUser = (req, res) => {
  res.status(200).send("<h1>PUT | UPDATE USER REQUEST RESPONSE ROUTE</h1>");
};

export const deleteUser = (req, res) => {
  res.status(200).send("<h1>DELETE | DELETE USER REQUEST RESPONSE ROUTE</h1>");
};
