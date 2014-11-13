var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var LibraryView = require('./views/library');

$(function() {
  var books = [
    {
      title: 'angular book',
      author: 'morinpic',
      releaseDate: '2008',
      keywords: 'angular'
    },
    {
      title: 'angular book',
      author: 'morinpic',
      releaseDate: '2008',
      keywords: 'angular'
    },
    {
      title: 'angular book',
      author: 'morinpic',
      releaseDate: '2008',
      keywords: 'angular'
    },
    {
      title: 'angular book',
      author: 'morinpic',
      releaseDate: '2008',
      keywords: 'angular'
    }
  ];
  new LibraryView(books);
});