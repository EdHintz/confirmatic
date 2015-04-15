"use strict";
var Promise = require("bluebird");
var Confidence = require("confidence");
var Joi = require("joi");

var configSettings;

function Config() {
	configSettings = {
		bandwidth : {
			userId : process.env.BW_USER_ID,
			token  : process.env.BW_TOKEN,
			secret : process.env.BW_SECRET
		}
	};
	this.store = new Confidence.Store(configSettings);
}

Config.prototype.validate = function () {
	var schema = Joi.object().keys({
		bandwidth : Joi.object().keys({
			userId : Joi.string().required(),
			token  : Joi.string().required(),
			secret : Joi.string().required()
		}),
	});

	var validatePromise = Promise.promisify(Joi.validate);
	return validatePromise(configSettings, schema);
};

module.exports = Config;

