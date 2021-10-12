const knex = require("../db/connection");

const create = (post) => {
  return knex("posts")
    .insert(post)
    .returning("*")
    .then((createdRecords) => createdRecords[0])
}

const read = (postId) => {
  return knex("posts")
    .select("*")
    .where({ post_id: postId })
    .first();
}

const update = (updatedPost) => {
  return knex("posts")
    .select("*")
    .where({ post_id: updatedPost.post_id })
    .update(updatedPost, "*")
}

const destroy = (post_id) => {
  return knex("posts")
    .where({ post_id })
    .del()
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
