import Ember from 'ember';
import config from './config/environment';
import DS from 'ember-data';

var Router = Ember.Router.extend({
  location: config.locationType
});

DS.RESTAdapter.reopen({
  namespace: "api"
});

Router.map(function() {
  this.resource("restaurants", { path: "/restaurants" });
  this.resource("restaurant",  { path: "/restaurants/:id" });
});

export default Router;
