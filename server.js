"use strict";

var config = require("./lib/config");

// validate the configuration before starting
if (!config.validate()) {
	console.log("Configuration errors detected.  Please fix the errors (see lib/config.js) and try again.");
	return;
}