module.exports = function(app) {
  var express = require('express');
  var restaurantRouter = express.Router();

  var RESTAURANTS = [
    {
      id:           1,
      name:         "Jika Ramen & Sushi House", 
      address:      "3925 Irving St San Francisco, CA",
      phone_number: "(415) 231-0736",
      menu_items:   [1, 2]
    },
    {
      id:           2,
      name:         "Bento House",
      address:      "448 Larkin St, San Francisco, CA 94102",
      phone_number: "(415) 702-9979"
    },
    {
      id:           3,
      name:         "Room Service Food and Liquor",
      address:      "900 Irving St, San Francisco, CA 94122",
      phone_number: "(415) 566-7666"
    },
    {
      id:           4,
      name:         "Oolong Noodles House", 
      address:      "646 Washington St, San Francisco, CA 94111", 
      phone_number: "(415) 986-2737"
    }
  ];

  var RESTAURANTS_COLLECTION = {
    1: RESTAURANTS[0],
    2: RESTAURANTS[1],
    3: RESTAURANTS[2],
    4: RESTAURANTS[3],
  };

  restaurantRouter.get('/', function(req, res) {
    res.send({restaurant: RESTAURANTS});
  });

  restaurantRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  restaurantRouter.get('/:id', function(req, res) {
    res.send({restaurant: RESTAURANTS_COLLECTION[req.params.id]});
  });

  restaurantRouter.put('/:id', function(req, res) {
    res.send({ 'restaurant': RESTAURANTS_COLLECTION[req.params.id] });
  });

  restaurantRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/restaurants', restaurantRouter);
};
