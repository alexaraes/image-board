var Photo = Backbone.Model.extend({
	defaults: {
		picture: null,
		caption: 'No photo'
	},

	// validate: function(attr, options) {
	// 	if(attr.picture == null || attr.picture.length == 0) {
	// 		return 'You must enter a photo URL.';
	// 	}
	// 	else if(attr.caption.length == 0) {
	// 		return 'You must enter a caption.'
	// 	}
		// else if(attr.picture)

	// },
	urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/alexa-pic-store'
});