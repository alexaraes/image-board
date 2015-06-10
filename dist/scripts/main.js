$(document).ready(function (){

	var addImage = new imageCollection();
	addImage.fetch();

	var newImageBuilder = _.template($('#photo-template').html());

	$('#new-photo-form').submit(function(e) {
		e.preventDefault();

		var newPhoto = new Photo({
			picture: $('#photo-url').val(),
			caption: $('#photo-caption-input').val()
		});

		if(newPhoto.isValid()) {
			addImage.add(newPhoto); 
			newPhoto.save();
			console.log(newPhoto);
		}
		else {
			console.log(newPhoto.validationError);
		}
	});

	addImage.on('add', function(model) {  
		var imageHtml = newImageBuilder(model.attributes);
		
		$('#photo-div').append(imageHtml);
		console.log('image added');
	});

});