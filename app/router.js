import Ember from 'ember';
import config from './config/environment';
import DS from 'ember-data';

var Router = Ember.Router.extend({
  location: config.locationType
});

DS.RESTAdapter.reopen({
  namespace: "api",

  // Use underscored URLs instead of camelCase
  //
  // Note: we need to use `this._super` to get pluralization for
  // collection routes.
  //
  pathForType: function (type) {
    return Ember.String.underscore(this._super(type));
  }
});

Router.map(function() {
  this.resource("restaurants",  { path: "/restaurants" });
  this.resource("restaurant",   { path: "/restaurants/:restaurant_id" }, function () {
    this.resource("menu_items", { path: "/menu_items" });
    this.resource("menu_item",  { path: "/menu_items/:menu_item_id" });
  });
});

export default Router;
