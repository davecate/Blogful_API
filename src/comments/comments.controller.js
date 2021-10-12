const service = require("./comments.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const commentExists = async (req, res, next) => {
  const { commentId } = req.params;
  const comment = await service.read(commentId);
  if (comment) {
    res.locals.comment = comment;
    return next();
  }
  return next({ status: 404, message: `Comment cannot be found.` });
}

const list = async (req, res, next) => {
  const data = await service.list()
  res.json({ data });
}

const listCommenterCount = async (req, res, next) => {
  const data = await service.listCommenterCount()
  for (datum of data) {
    datum.count = Number(datum.count)
  }
  res.json({ data });
}

const read = async (req, res, next) => {
  const data = res.locals.comment
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  listCommenterCount: asyncErrorBoundary(listCommenterCount),
  read: [asyncErrorBoundary(commentExists), read],
};
