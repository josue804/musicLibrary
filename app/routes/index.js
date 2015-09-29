import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      artists: this.store.findAll('artist'),
      songs: this.store.findAll('song')
    });
  },

  actions: {
    saveArtist(params) {
      var newArtist = this.store.createRecord('artist', params);
      newArtist.save();
    },

    saveSong(params) {
      var newSong = this.store.createRecord('song', params);
      var artist = params.artist;
      artist.get('songs').addObject(newSong);
      newSong.save().then(function() {
        return artist.save();
      });
    }
  }
});
