import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  artist: DS.belongsTo('artist', {async: true}),
  file: DS.attr()
});
