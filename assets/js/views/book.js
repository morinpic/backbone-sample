var Backbone = require('backbone');
var $ = require('jquery');
var BookView = require('./book');

module.exports = Backbone.View.extend({
  tagName: 'div',
  calssName: 'bookContainer',
  template: _.template($('#bookTemplate').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  renderBook: function() {
    var bookView = new BookView({
      model: item
    });
    this.$el.append(bookView.render().el);
  }
});