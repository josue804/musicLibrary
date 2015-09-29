import Ember from 'ember';

export default Ember.Component.extend({
  newSongForm: false,

  model() {
    return this.store.findAll('song');
  },

  actions: {
    songFormShow() {
      this.set('newSongForm', true);
    },
    songFormHide() {
      this.set('newSongForm', false);
    },
    saveSong() {
      var params = {
        name: this.get('name'),
        artist: this.get('artist')
      }
      this.sendAction('saveSong', params);
      this.set('newSongForm', false);
    }
  }
});
