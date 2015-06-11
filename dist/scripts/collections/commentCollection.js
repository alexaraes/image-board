var commentCollection = Backbone.Collection.extend({
	model: Comment,
	url: 'http://tiy-fee-rest.herokuapp.com/collections/alexa-dump-comments'
});