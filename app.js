const express = require("express");
const app = express();
const items = require("./fakedb");
const Item = require("./item")
const itemsRoutes = require("/.routes/items")

app.use(express.json());
app.use("/items", itemsRoutes)



class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

app.use(function(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message;

  return res.status(status).json({
    error: { message, status }
  });
});

app.listen(3000, function() {
  console.log("App on port 3000");
});
