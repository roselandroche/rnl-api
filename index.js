const express = require("express"); // import the express package

const myLogger = require("./middleware/test.js");
const requestTime = require("./middleware/requestTime");

const server = express(); // creates the server

server.use(myLogger);
server.use(requestTime);

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  if (res.status !== 400) {
    res.send(res.body);
  } else {
    res.send(res.status);
  }
});

// watch for connections on port 8000
server.listen(8000, () =>
  console.log("Server running on http://localhost:8000")
);

module.exports = server;
