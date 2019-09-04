

const Item = require("../item");
const express = require('express');

const router = express.Router();


app.get("/items/", function(req, res) {
  return res.json({ items: items });
});

app.post("/items/", function(req, res) {
  let i = new Item(req.body.name, req.body.price);
  return res.json({ added: i });
});

app.get("/items/:name", function(req, res) {

  let resp = global.items.find(function(item) {
    return item.name === req.params.name;
  });
  return res.json(resp);
});

app.patch("/items/:name", function(req, res) {
  let resp = global.items.find(function(item) {
    return item.name === req.params.name;
  });
 
  resp.name = req.body.name;
  resp.price = req.body.price;
  return res.json({ update: resp });
});

app.delete("/items/:name", function(req, res) {
  let itemIndex = global.items.findIndex(function(item) {
    return item.name === req.params.name;
  });

  global.items.splice(itemIndex, 1);
  return res.json({ message: "deleted" });
});


module.exports = router;