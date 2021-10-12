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
  const data = await service.create(req.body.data)
  res.status(201).json({ data });
}

const update = async (req, res) => {
  const [ data ] = await service.update(req.body.data);
  res.json({ data })
}

const destroy = async (req, res) => {
  const { post: { post_id } } = res.locals
  await service.delete(post_id)
  res.sendStatus(204);
}

module.exports = {
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(postExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(postExists), asyncErrorBoundary(destroy)],
};
