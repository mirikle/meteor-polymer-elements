Package.describe({
	summary: "Add Polymer-Elements to Meteor",
	version: "1.0.4",
	git: "http://github.com/mirikle/meteor-polymer-elements",
	name: 'polymer-elements'
});

Npm.depends({
	bower: '1.3.12'
});

Package.onUse(function(api) {
	api.use('polymer');
	api.use('underscore');
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('polymer-elements.js', 'server');
});