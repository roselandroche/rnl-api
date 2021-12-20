var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  let bday = req.query.bday;
  if (bday === "true") {
    res.body = "surprise";
  } else {
    res.body = "no dice";
  }
  next();
};

module.exports = requestTime;
