var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'li',
	model: app.Book,

	initialize: function() {
		this.template = _.template($('#book-item').html());
	},

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});