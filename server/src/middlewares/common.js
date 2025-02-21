function removeXPoweredBy(req, res, next) {
  res.removeHeader('x-powered-by');
  next();
}

function checkId(req, res, next) {
  const { id } = req.params;
  if (Number(id)) {
    next();
  } else {
    res.status(400).send(`Неверный тип данных для id: ${id}`);
  }
}

function checkUserId(req, res, next) {
  const { userId } = req.params;
  if (Number(userId)) {
    next();
  } else {
    res.status(400).send(`Неверный тип данных для id: ${userId}`);
  }
}

function checkBoardId(req, res, next) {
  const { boardId } = req.params;
  if (Number(boardId)) {
    next();
  } else {
    res.status(400).send(`Неверный тип данных для id: ${boardId}`);
  }
}

module.exports = { removeXPoweredBy, checkId, checkUserId, checkBoardId };
