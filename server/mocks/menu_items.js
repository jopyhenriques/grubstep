module.exports = function(app) {
  var express = require('express');
  var menuItemRouter = express.Router();

  var MENU_ITEMS = [
    // Jika Ramen & Sushi House
    { id: 1, restaurant_id: 1, name: "Tonkatsu Ramen", description: "Pork ramen.", price: 9.95 },
    { id: 2, restaurant_id: 1, name: "Soy Sauce Ramen", description: "Ramen with a soy sauce based.", price: 9.95 },
    // Bento House
    { id: 3, restaurant_id: 2, name: "Spicy Salt Ramen", description: "Ramen with a spicy and salty broth.", price: 10.95 },
    { id: 4, restaurant_id: 2, name: "Miso Ramen", description: "Ramen with a miso based broth.",  price: 9.98 },
    // Room Service Food and Liquor
    { id: 5, restaurant_id: 3, name: "Something Ramen", description: "Ramen with a surprise something in it.", price: 10.95 },
    { id: 6, restaurant_id: 3, name: "Crayon Ramen", description: "Multi-color wax based Ramen.", price: 11.95 },
    // Oolong Noodles House
    { id: 7, restaurant_id: 4, name: "Candle Ramen", description: "Wax based Ramen for those who love candles..", price: 10.95 },
    { id: 8, restaurant_id: 4, name: "Artisanal Barnwood Ramen", description: "Only the finest barn wood is used in the preparation of this.", price: 17.95 }
  ];

  var MENU_ITEMS_COLLECTION = {
    1: MENU_ITEMS[0],
    2: MENU_ITEMS[1],
    3: MENU_ITEMS[2],
    4: MENU_ITEMS[3],
    5: MENU_ITEMS[4],
    6: MENU_ITEMS[5],
    7: MENU_ITEMS[6],
    8: MENU_ITEMS[7]
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
