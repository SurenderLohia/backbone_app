var app = app || {};

app.Books = Backbone.Collection.extend({
	model: app.Book,
	url: '/data/book-data.json'
});