"use strict";
var Joi = require("joi");
var deepFreeze = require("deep-freeze-strict");

function Config() {
	this.bandwidth = {
			userId : process.env.BW_USER_ID,
			token  : process.env.BW_TOKEN,
			secret : process.env.BW_SECRET
		};

	var schema = Joi.object().keys({
		bandwidth : Joi.object().keys({
			userId : Joi.string().required(),
			token  : Joi.string().required(),
			secret : Joi.string().required()
		})
	});

	var result = Joi.validate(this, schema);
	if (result.error) {
		throw new Error(result.error);
	}

	deepFreeze(this);
}

module.exports = Config;

