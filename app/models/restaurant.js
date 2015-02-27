import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr("string"),
  address:      DS.attr("string"),
  phone_number: DS.attr("string"),
  menu_items:   DS.hasMany("menu_item", {async: true})
});
