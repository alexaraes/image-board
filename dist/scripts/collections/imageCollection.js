var imageCollection = Backbone.Collection.extend({

	model: Photo,
	url: 'http://tiy-fee-rest.herokuapp.com/collections/alexa-dump'
});