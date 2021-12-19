const express = require("express"); // import the express package

const myLogger = require("./middleware/test.js");
const requestTime = require("./middleware/requestTime");

const server = express(); // creates the server

server.use((err, req, res, next) => {
  console.log(`Err:`, err);
  res.status(500).json({
    message: `Something went wrong`,
  });
});

server.use(myLogger);
server.use(requestTime);

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  res.send(res.body);
});

// watch for connections on port 8000
server.listen(8000, () =>
  console.log("Server running on http://localhost:8000")
);

module.exports = server;
