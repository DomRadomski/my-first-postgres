// controllers/userController.js
exports.newUserForm = (req, res) => {
  res.render("new");
};

exports.createUser = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.send(`Received username: ${req.body.username}`);
};