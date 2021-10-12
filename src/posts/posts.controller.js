const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const postExists = async (req, res, next) => {
  const { postId } = req.params;

  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: `Post cannot be found.` });
}

const create = async (req, res) => {
  // your solution here
  res.json({ data: "" });
}

const update = async (req, res) => {
  // your solution here
  res.json({ data: "" });
}

const destroy = async (req, res) => {
  // your solution here
  res.json({ data: "" });
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
