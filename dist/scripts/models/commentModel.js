var Comment = Backbone.Model.extend({
	defaults: {
		comment: null,
		imgId: null
	},

	validate: function(attr, options) {
		if(attr.comment == '') {
			alert('You must enter a comment.');
		}

	},
	urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/alexa-dump-comments'
});