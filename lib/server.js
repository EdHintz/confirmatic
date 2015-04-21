"use strict";

var Config = require("./config");

var config;

try {
	config = new Config();
}
catch (error) {
	console.error("Configuration is not valid :" + error);
	console.error("Please see README.md about proper configuration required before running.");
	process.exit(1);
}
