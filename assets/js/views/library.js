var Backbone = require('backbone');
var $ = require('jquery');
var Library = require('../collections/library');

module.exports = Backbone.View.extend({
  el: '#books',
  initialize: function (initialBooks) {
    this.colleciton = new Library(initialBooks);
    this.render();
  },

  render: function() {
    this.collections.each(function(item) {
      this.renderBook(item);
    }, this);
  }
});