$(document).ready(function (){

	var addImage = new imageCollection();
	addImage.fetch({

		success: function(imageCollection){
            imageCollection.forEach(function(model){
                $("#photo-div").append(newImageBuilder(model.attributes));
                $("#photo-div").fadeIn(3000);
            });
            addImage.on("add", function(image){
                $("#photo-div").prepend(newImageBuilder(image.attributes));
                $("#photo-div").fadeIn(3000);

                	$('#photo-url').val(''),
					$('#photo-caption-input').val('')
            });
        }
    });

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

	var addComment = new commentCollection();
	addComment.fetch({

		success: function(commentCollection){
            commentCollection.forEach(function(model){
                $("#photo-div").append(newImageBuilder(model.attributes));
                $("#photo-div").fadeIn(3000);
            });
            addComment.on("add", function(image){
                $("#photo-div").prepend(newImageBuilder(image.attributes));
                $("#photo-div").fadeIn(3000);

                	$('#photo-url').val(''),
					$('#photo-caption-input').val('')
            });
        }
    });

	var newCommentBuilder = _.template($('#photo-template').html());

	$('#comment-section').submit(function(e) {
		e.preventDefault();

		var newComment = new Comment({
			// comment: $('#add-comment').val(),
			photoId: imageModel.get('_id')
		});

		if(newComment.isValid()) {
			addComment.add(newComment); 
			newPhoto.save();
		}
		else {
			console.log(newComment.validationError);
		}

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