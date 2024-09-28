var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  let bday = req.query.bday;

  if (bday !== "true" && bday !== "false") {
    return res.send(res.status(400).statusCode);
  }

  if (bday === "true") {
    res.body = "surprise";
  } else if (bday === "false") {
    res.body = "no dice";
  }
  next();
};

module.exports = requestTime;
