const knex = require("../db/connection");

const create = (post) => {
  //your solution here
}

const read = (postId) => {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

const update = (updatedPost) => {
  //your solution here
}

const destroy = (postId) => {
  //your solution here
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
