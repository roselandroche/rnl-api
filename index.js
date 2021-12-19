const express = require("express"); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  res.send("Hello from Express");
});

// watch for connections on port 8000
server.listen(8000, () =>
  console.log("Server running on http://localhost:8000")
);
