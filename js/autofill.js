Drupal.behaviors.autofill = function(context) {

    /*Basic Info*/
		    		
		$('#edit-field-name-0-value').autofill( {
			value: 'e.g. Name',
		});
		    	
		$('#edit-field-name-0-value	').autofill( {
			value: 'Last name',
		});
		
		$('#edit-field-about-me-0-value').autofill( {
			value: 'e.g. General information about who you are, where you came from, and where you are going.',
		});
				
		$('#edit-field-interests-0-value').autofill( {
			value: 'e.g. Describe your interests and hobbies. This ssection is for whole sentences, not tags',		
		});
		
		/*Career Information*/	
		
		$('#edit-field-app-career-objective-0-value').autofill( {
			value: 'e.g. To secure a position where my qualities of a fast learner and the ability to take on new challenges can be used.',				
		});
		
		$('#edit-field-app-job-history-0-company').autofill( {
			value: 'e.g. Company Name',
		});
	
		$('#edit-field-app-job-history-0-position').autofill( {
			value: 'e.g. Senior Web Developer',		
		});	
		
		$('#edit-field-app-qualification-0-institution').autofill( {
			value: 'e.g. The place where you studied',
		});	
				
		$('#edit-field-app-qualification-0-achievement').autofill( {
			value: 'e.g. Bcom in Accounting',			
		});
		
		/*Online Communities*/
				
		$('#edit-field-facebook-0-url').autofill( {
			value: 'e.g. http://www.facebook.com/profilename',			
			prePopulate: 'http://www.facebook.com/'
		});
				
		$('#edit-field-twitter-0-url').autofill( {
			value: 'e.g. http://www.twitter.com/profilename',			
			prePopulate: 'http://'
		});
				
		$('#edit-field-linkedin-0-url').autofill( {
			value: 'e.g. http://www.linkedin.com/pub/profilename',			
			prePopulate: 'http://www.linkedin.com/pub'
		});
		
		$('#edit-field-myspace-0-url').autofill( {
			value: 'e.g. http://www.myspace.com/profilename',			
			prePopulate: 'http://www.myspace.com/'
		});
				
		$('#edit-field-friendfeed-0-url').autofill( {
			value: 'e.g. http://friendfeed.com/profilename',			
			prePopulate: 'http://friendfeed.com/'
		});
		
		/*IM Handles*/
		
		$('#edit-field-google-0-value').autofill( {
			value: 'e.g. http://mail@google.com',				
		});
				
		$('#edit-field-skype-0-value').autofill( {
			value: 'e.g. skype name',	
		});
				
		$('#edit-field-yahoo-0-value').autofill( {
			value: 'e.g. http://mail@yahoo.com',
		});
					
		$('#edit-field-aim-0-value').autofill( {
			value: 'e.g. AIM name',				
		});
				
		$('#edit-field-icq-0-value').autofill( {
			value: 'e.g. ICQ name',			
			prePopulate: 'http://'
		});
		
		/*Links*/
		
		$('#edit-field-homepage-0-url').autofill( {
			value: 'e.g. http://www.website.com',			
			prePopulate: 'http://'
		});
				
		$('#edit-field-blog-0-url').autofill( {
			value: 'e.g. http://www.blogexample.com',			
			prePopulate: 'http://'
		});
				
		$('#edit-field-favorite1-0-url').autofill( {
			value: 'e.g. http://www.myfavorite.com',			
			prePopulate: 'http://'
		});
				
		$('#edit-field-favorite2-0-url').autofill( {
			value: 'e.g. http://www.myfavorite.com',			
			prePopulate: 'http://'
		});
				
		$('#edit-field-favorite3-0-url').autofill( {
			value: 'e.g. http://www.favoritesite.com',			
			prePopulate: 'http://'
		});
		
 }