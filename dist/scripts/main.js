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
			$('#form-div').slideUp();
		}
		else {
			console.log(newPhoto.validationError);
		}

	});

	addImage.on('add', function(model) {  
		var imageHtml = newImageBuilder(model.attributes);
		
		$('#photo-div').append(imageHtml);

		$('#photo-url').val(''),
		$('#photo-caption-input').val('')
	});

	$('#menu-click').click(function(){    
    	var showForm = $('#form-div');

	    if(showForm.hasClass('active')){
	        showForm.removeClass('active');
	        showForm.slideUp();
	    }else{
	        showForm.addClass('active');
	        showForm.slideDown();
	    }

	});

	$('#cancel').click(function () {
		$('#form-div').slideUp();
	});

});