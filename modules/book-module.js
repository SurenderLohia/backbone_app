// Book module
var app = app || {};

var books = new app.Books();

// Fetch data
books.fetch({
	success: function(data) {
		var bookList = new app.BookListView({
			el: '#book-list',
			model: data,
		});

		bookList.render();
	},
	error: function(err) {
		console.log('Error: ' + err);
	}
});


