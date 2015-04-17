"use strict";

var Config = require("./config");

var config = new Config();

// validate the configuration before starting
var configValidation = config.validate();
if (configValidation.error) {
	console.error("Configuration is not valid :" + configValidation.error);
	console.error("Please see README.md about proper configuration required before running.");
	return;
}

