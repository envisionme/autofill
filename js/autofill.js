Drupal.behaviors.autofill = function(context) {
				
		$('#edit-field-app-career-objective-0-value').autofill( {
			value: 'e.g. To secure a position where my qualities of a fast learner and the ability to take on new challenges can be used.',				
		});
		
		// Homepage URL
		$('#edit-field-homepage-0-url').autofill( {
			value: 'e.g. http://www.website.com',			
			prePopulate: 'http://'
		});
		
		// Blog URL
		$('#edit-field-blog-0-url').autofill( {
			value: 'e.g. http://www.blogexample.com',			
			prePopulate: 'http://'
		});
		
		// Favorite URL
		$('#edit-field-favorite1-0-url').autofill( {
			value: 'e.g. http://www.myfavorite.com',			
			prePopulate: 'http://'
		});
		
		// Favorite URL
		$('#edit-field-favorite2-0-url').autofill( {
			value: 'e.g. http://www.myfavorite.com',			
			prePopulate: 'http://'
		});
		
		// Favorite URL
		$('#edit-field-favorite3-0-url').autofill( {
			value: 'e.g. http://www.favoritesite.com',			
			prePopulate: 'http://'
		});
		
 }