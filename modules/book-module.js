// Book module
var app = app || {};

var book1 = new app.Book({
	id: 1,
	title: 'Book 1'
});

var book2 = new app.Book({
	id: 2,
	title: 'Book 2'
});

var books = new app.Books([book1, book2]);

var bookList = new app.BookListView({
	el: '#todo-list',
	model: books,
});

bookList.render();