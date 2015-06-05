var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'li',
	model: app.Book,
	render: function() {
		this.$el.html(this.model.get('title'));
		return this;
	}
});