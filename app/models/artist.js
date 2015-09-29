import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  genre: DS.attr(),
  songs: DS.hasMany('song', {async: true})
});
