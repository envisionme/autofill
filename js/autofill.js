Drupal.behaviors.autofill = function(context) {
  var DEFAULT = "#999";
  var ACTIVE = "#333";

  //Invite friend
  $('#edit-email').autofill( {
    value: 'friend@example.com',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  // Basic Info
  $('#edit-field-about-me-0-value').autofill( {
    value: 'e.g. General information about who you are, where you came from, and where you are going.',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-interests-0-value').autofill( {
    value: 'e.g. Describe your interests and hobbies. This section is for whole sentences, not tags',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  //Contact Details
  $('#edit-field-location-0-name').autofill( {
    value: 'e.g. Hatfield',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-location-0-street').autofill( {
    value: 'e.g. 1250 Smith street',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-location-0-city').autofill( {
    value: 'e.g. Pretoria',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-location-0-country').autofill( {
    value: 'e.g. South Africa',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-location-0-province').autofill( {
    value: 'e.g. Gauteng ',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-location-0-postal-code').autofill( {
    value: 'e.g. 0025',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-tel-0-value").autofill( {
    value: "eg. +27 72 4568 456",
    prePopulate: "+",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
   });

  $("#edit-field-fax-0-value").autofill( {
    value: "eg. +27 72 4568 456",
    prePopulate: "+",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
   });

  $("#edit-field-cell-0-value").autofill( {
    value: "eg. +27 72 4568 456",
    prePopulate: "+",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });
  // Video
  $('#edit-field-video-link-new').autofill( {
    value: 'e.g. http://youtu.be/jPEETDfvzvA',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  // Career Information
  $('#edit-field-app-career-objective-0-value').autofill( {
    value: 'e.g. To secure a position where my qualities of a fast learner and the ability to take on new challenges can be used.',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-app-job-history-0-company').autofill( {
    value: 'e.g. Big Company Inc',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-app-job-history-0-position').autofill( {
    value: 'e.g. Inturn',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-app-qualification-0-institution').autofill( {
    value: 'e.g. Harvard Law',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-app-qualification-0-achievement').autofill( {
    value: 'e.g. Bcom in Accounting',
  });

  $("#edit-field-facebook-0-url").autofill( {
    value: "eg. https://www.facebook.com//profilename",
    prePopulate: "https://www.facebook.com/",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-twitter-0-url").autofill( {
    value: "eg. https://twitter.com/profilename",
    prePopulate: "https://twitter.com/",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-linkedin-0-url").autofill( {
    value: "eg. http://za.linkedin.com/in/public_profile_name",
    prePopulate: "http://",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-friendfeed-0-url").autofill( {
    value: "eg. http://friendfeed.com/profilename",
    prePopulate: "http://friendfeed.com/",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-myspace-0-url").autofill( {
    value: "eg. http://www.myspace.com/profilename",
    prePopulate: "http://www.myspace.com/",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-homepage-0-url").autofill( {
    value: "e.g. http://www.example.com",
    prePopulate: "http://",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-homepage-0-title").autofill( {
    value: "Example",
    prePopulate: "",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-blog-0-title").autofill( {
    value: "Example",
    prePopulate: "",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-blog-0-url").autofill( {
    value: "e.g. http://www.example.com",
    prePopulate: "http://",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-favorite1-0-url").autofill( {
    value: "e.g. http://www.example.com",
    prePopulate: "http://",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-favorite1-0-title").autofill( {
    value: "Example",
    prePopulate: "",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-google-0-value").autofill( {
    value: "username@gmail.com",
    prePopulate: "",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-skype-0-value").autofill( {
    value: "Skypename",
    prePopulate: "",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-yahoo-0-value").autofill( {
    value: "username@yahoo.com",
    prePopulate: "",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-friendfeed-0-url').autofill( {
    value: 'e.g. http://friendfeed.com/[username]',
    prePopulate: 'http://friendfeed.com/',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $('#edit-field-friendfeed-0-url').autofill( {
    value: 'e.g. http://friendfeed.com/[username]',
    prePopulate: 'http://friendfeed.com/',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  /* Company profile wizard*/
  $("#edit-field-tel-0-value-2").autofill( {
    value: "eg. +27 72 4568 456",
    prePopulate: "+",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-fax-0-value-2").autofill( {
    value: "eg. +27 72 4568 456",
    prePopulate: "+",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  $("#edit-field-homepage-0-title-2").autofill( {
    value: "eg. Company name",
    prePopulate: " ",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });
  $("#edit-field-homepage-0-url-2").autofill( {
    value: "e.g. http://www.example.com",
    prePopulate: "http://",
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });
  /* End Company profile wizard*/

  //showcase embed Audio
  $('#edit-field-audio-0-embed').autofill( {
    value: 'e.g. http://soundcloud.com/username/song-title',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  //showcase embed Documents
  $('#edit-field-document-0-upload').autofill( {
    value: 'eg. my-resume.doc',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  //showcase embed Images
  $('#edit-field-flickr-image-0-embed').autofill( {
    value: 'e.g. http://www.flickr.com/photos/sebhayez/5323076064/in/pool-962722@N23/#/',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  //showcase embed Slides
  $('#edit-field-slides-0-embed').autofill( {
    value: 'e.g. http://www.slideshare.net/username/slide-title',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  //showcase embed Video
  $('#edit-field-video-file-0-embed').autofill( {
    value: 'e.g. http://www.vimeo.com/username/video-title',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });

  //Facebook status message
  $('#edit-fbss-status').autofill( {
    value: 'What\'s on your mind',
    defaultTextColor: DEFAULT,
    activeTextColor: ACTIVE
  });
}

