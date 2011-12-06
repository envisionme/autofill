Description

This is a simple module to allow the admin user to turn any textfield, textarea
into a simple but very effective autofill field to explain the users how to
fill in the fields. And as the user clicks in the textfield, textarea,
then the help text will simply disappear and allow the user to fill in the
information as described. In laymen's term this module enables admin user to
pre-populate a textfield, and textarea with values to describe how users
should fill in the form according to the way that the admin users would like
it to be filled in. eg, link text field: you could add -> http://

The admin user wil be able to use color to describe the default value and
prepopulate value color, for better assistance to the user who has to fill in
the form.
Admin user will be enabled to fill in the setting page form
(admin/settings/autofill) and save the information in the system. Use a web
tool like Firebug etc. to access the source code and then you'll be able to
copy the textfield/textarea class or ID and paste it into the field that
says ID.

But if the admin user don't want to use this method there is a sample.js file
that could be saved to anything that admin user would like.

Call the plugin like so:
Drupal.behaviors.autofill = function(context) {
  $("#edit-field-test-0-value").autofill( {
    value: "Hallo world",
    prePopulate: "Hallo Piet",
    defaultTextColor: "#666666",
    activeTextColor: "#000000",
  }
}

Requirements:

Before installing this module make sure you also download libraries
api http://drupal.org/project/libraries
Autofill is depended on the libraries module.

You'll also need to download a third party javascript file created
by Mmangino jQuery-AutoFill using git ect.
https://github.com/mmangino/jQuery-AutoFill.git

Installation:

1.Upload the Autofill module in this location sites/all/module/.
2.Enable the module, please make sure the libraries module is also enabled.
3.Create a libraries folder on the sites/all directory in the libraries folder
create an autofill folder and add the jquery.autofill.js in the autofill
folder, it should look like this sites/all/libraries/autofill/jquery.autofill.js
4.Go to Admin > Settings > Autofill to access the autofill settings page

Instruction:

On the Autofill page you'll see the following fields:
Default Text color:
Admin user wil be able to choose any color to describe the default text better.
This text will disappear when user clicks in field so it's a good idea to use
bright colors to describe what you would like the user to enter.

Active Text Color:
Admin user will use this color option to specify the color of the help text,
normally this would be the standard site text color.

Fill in autofill fields:
1.ID/class: Fill in the id or class of the textfield, textarea you want to
autofill (eg. #email-text-area).
2.Empty value: Fill description to describe what the field should be
populated with. eg. Please fill in your email address.
3.Pre-populate value:Force users to populate the filed with the correct values,
eg. user http:// then user will be able to add the www.site.com etc.

Sponsors:
This module was sponsored by NoJoShmo.com and is maintained by Rui Ferreira.
This module is based on the work done by mmangino jQuery-AutoFill
