import Ember from 'ember';

export default Ember.Component.extend({
  newSongForm: false,

  model() {
    return Ember.RSVP.hash({
      artists: this.store.findAll('artist'),
      songs: this.store.findAll('song')
    });
  },

  actions: {
    makeSelection(selection, component) {
      if(selection) {
        this.set('artist', selection);
      } else {
        this.set('selection', component.get('default'));
      }
    },

    songFormShow() {
      this.set('newSongForm', true);
    },
    songFormHide() {
      this.set('newSongForm', false);
    },
    saveSong() {
      var params = {
        name: this.get('name'),
        artist: this.get('artist'),
        file: this.get('file')
      }
      debugger;
      this.sendAction('saveSong', params);
      this.set('newSongForm', false);
    }
  }
});
