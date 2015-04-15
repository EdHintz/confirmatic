"use strict";

var Config = require("./config");

var config = new Config();

// validate the configuration before starting
config.validate()
	.then(function () {
		console.log("Configuration validated.");
	})
	.catch(function (err) {
		console.error("Configuration is not valid :" + err);
		console.error("Please see README.md about proper configuration required before running.");
	});
