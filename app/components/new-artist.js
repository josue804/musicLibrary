import Ember from 'ember';

export default Ember.Component.extend({
  newArtistForm: false,

  model() {
    return this.store.findAll('artist');
  },

  actions: {
    artistFormShow() {
      this.set('newArtistForm', true);
    },
    artistFormHide() {
      this.set('newArtistForm', false);
    },
    saveArtist() {
      var params = {
        name: this.get('name'),
        genre: this.get('genre')
      }
      this.sendAction('saveArtist', params);
      this.set('newArtistForm', false);
    }
  }
});
