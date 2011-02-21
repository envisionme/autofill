Drupal.behaviors.autofill = function(context) {
		
		$('#edit-field-test-0-value').autofill( {
			value: 'e.g. http://www.example.com',
			defaultTextColor: '#666',
			activeTextColor: '#333' ,
			prePopulate: 'http://'
		});
		
 }