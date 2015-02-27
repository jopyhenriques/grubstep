import Ember from 'ember';
import $ from 'jquery';

export default Ember.ObjectController.extend({
  actions: {
    search: function (selector, restaurants) {
      var name = $(selector).val(),
          restaurant;

      for (var i=0; i < restaurants.length; i++) {
        if (restaurants[i]["name"] == name) {
          restaurant = restaurants[i];
          break;
        }
      }

      if (restaurant == null) {
        this.get("restaurantNotFound")();
      } else {
        this.restaurantFound(restaurant);
      }
    },

    restaurantNotFound: function () {
      console.log("NOT FOUND");
    },

    restaurantFound: function (name) {
      console.log("FOUND");
      console.log(restaurant);
    }
  }
});
