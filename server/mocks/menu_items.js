module.exports = function(app) {
  var express = require('express');
  var menuItemRouter = express.Router();

  var MENU_ITEMS = [
    { id: 1, name: "Chashu Ramen", },
    { id: 2, name: ""},
    { id: 3, },
    { id: 4, }
  ];

  var MENU_ITEMS_COLLECTION = {
    1: MENU_ITEMS[0],
    2: MENU_ITEMS[1],
    3: MENU_ITEMS[2],
    4: MENU_ITEMS[3],
  };

  menuItemRouter.get('/', function(req, res) {
    res.send({menu_item: MENU_ITEMS});
  });

  menuItemRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  menuItemRouter.get('/:id', function(req, res) {
    res.send({menu_item: MENU_ITEMS_COLLECTION[req.params.id]});
  });

  menuItemRouter.put('/:id', function(req, res) {
    res.send({menu_item: MENU_ITEMS_COLLECTION[req.params.id] });
  });

  menuItemRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/menu_items', menuItemRouter);
};
