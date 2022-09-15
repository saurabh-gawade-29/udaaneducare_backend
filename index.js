// Express = Backend Framework
// MiddleWare = Cors
//  db = MYSQL
const express = require("express"); // instance of express lib
const app = express(); // instance of express - Above line

app.listen(3001, () => {
  console.log("Server is Running on port 3001");
});
