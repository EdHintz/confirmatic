"use strict";

var config;

config = {
	bandwidth : {
		userId : process.env.BW_USER_ID,
		token  : process.env.BW_TOKEN,
		secret : process.env.BW_SECRET
	},

	isSet : function (prop) {
		try {
			var value;
			/* jshint ignore:start */
			value = eval(prop);
			/* jshint ignore:end */
			if (value === undefined || value === "") {
				throw new Error("variable not set: " + prop);
			}
			return true;
		}
		catch (ex) {
			console.error("Please set a value for config variable: " + prop);
			return false;
		}
	},

	validate : function () {
		var isValid = true;
		isValid = this.isSet("config.bandwidth.userId") && isValid;
		isValid = this.isSet("config.bandwidth.token") && isValid;
		isValid = this.isSet("config.bandwidth.secret") && isValid;
		return isValid;
	}
};

module.exports = config;
