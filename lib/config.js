"use strict";
var Joi = require("joi");
var deepFreeze = require("deep-freeze-strict");

function Config() {
	this.settings = {
		bandwidth : {
			userId : process.env.BW_USER_ID,
			token  : process.env.BW_TOKEN,
			secret : process.env.BW_SECRET
		}
	};

	this.validate = function () {
		var schema = Joi.object().keys({
			bandwidth : Joi.object().keys({
				userId : Joi.string().required(),
				token  : Joi.string().required(),
				secret : Joi.string().required()
			}),
		});
		return Joi.validate(this.settings, schema);
	};

	deepFreeze(this);
}

module.exports = Config;

