var app = app || {};

app.BookListView = Backbone.View.extend({
	model: app.Books,

	render: function() {
		this.$el.html();

		var self = this;

		for(var i = 0; i < this.model.length; i += 1) {
			var bookView = new app.BookView({model: this.model.at(i)});

			this.$el.append(bookView.$el);
			bookView.render();
		}
		
		return this;
	}
});