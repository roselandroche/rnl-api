var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  res.body = "surprise";
  next();
};

module.exports = requestTime;
