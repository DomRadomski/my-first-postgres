// controllers/userController.js
const db = require("../db/queries");

async function getUsernames(req, res) {
  const {search} = req.query;
  const usernames = search
    ? await db.searchUsername(search)
    : await db.getAllUsernames();

  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function deleteAllUsernames(req, res) {
    await db.deleteAllUsernames();  
    res.send("Deleted all usernames")
}

async function createUsernameGet(req, res) {
  await res.render("new");
};

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernames
};