var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  default: {
    coverImage: 'img/placeholder.png',
    title: '無題',
    author: 'hoge',
    releaseDate: 'hoge',
    keywords: 'fuga'
  }
});
