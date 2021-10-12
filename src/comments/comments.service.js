const knex = require("../db/connection");

const list = () => {
  return knex("comments")
    .select("*")
}

const listCommenterCount = () => {
  return knex("comments as c")
    .join("users as u", "c.commenter_id", "u.user_id")
    .count("c.comment_id")
    .select("u.user_email as commenter_email")
    .groupBy("commenter_email")
    .orderBy("commenter_email")
}

const read = (commentId) => {
  // your solution here
}

module.exports = {
  list,
  listCommenterCount,
  read,
};
