// Model
var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

// Collection
var TodosCollection = Backbone.Collection.extend({
  model: Todo,
});

var a = new Todo({title: 'Go to China', completed: true}),
	b = new Todo({title: 'Go to Japan'}),
	c = new Todo({title: 'Go to Germany'});

var todos = new TodosCollection([a, b, c]);


// View
var TodoView = Backbone.View.extend({
	model: Todo,
	initialize: function() {
		console.log('todo view has been created');
	},
	tagName: 'li',
	render: function() {
		this.$el.html(this.model.get('title'));
		return this;
	}
});

//var todoview = new TodoView({model: a});

var TodoListView = Backbone.View.extend({
	model: TodosCollection,

	render: function() {
		this.$el.html();

		var self = this,
			i = 0,
			modelLen = model.length,
			m_bookView;

		for(i = 0; i < modelLen; i += 1) {
			m_todoView = new TodoView({model: this.model.at(i)});

			this.$el.append(m_todoView.$el);

			m_todoView.render();
		}

		return this;	
	}
});

$(document).ready(function() {
	var todoList = new TodoListView({el: '#todo-list', model: todos})
	todoList.render();
})


define(function (require) {
  var _ = require('underscore'),
      Backbone = require('backbone'),
      $ = require('jquery'),
      AppTileView = require('views/apps/app-tile-view');
      
  var IntegrationView = Backbone.View.extend({
    render: function() {
      console.log('app-tiles-view instansiated');
      var appTileView,
          i,
          modelLen = this.model.length;

      for(i = 0; i < modelLen; i += 1) {
        appTileView = new AppTileView({model: this.model.at(i)});


        this.$el.append(appTileView.el);
        appTileView.render();
      }

      return this;
    },
  });

  return IntegrationView;
});




