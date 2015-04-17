"use strict";

var chai = require("chai");
var expect = chai.expect;

var Config = require("../../lib/config");

describe("test config", function () {
	describe("config validate should succeed", function () {
		it("Should validate config assuming environment variables are properly set", function () {
			var config = new Config();
			var validation = config.validate();
			expect(validation.error).to.be.null;
		});
	});

	describe("config validate should fail", function () {
		var config;
		var previousBandwidthUserId;

		beforeEach(function () {
			previousBandwidthUserId = process.env.BW_USER_ID;
			process.env.BW_USER_ID = "";
			config = new Config();
		});

		afterEach(function () {
			process.env.BW_USER_ID = previousBandwidthUserId;
		});

		it("Should fail validation because userId is not set", function () {
			var config = new Config();
			var validation = config.validate();
			expect(validation.error).to.exist;
		});
	});

	describe("config values are read-only", function () {
		var config = new Config();

		it("should throw changing config value", function () {
			var setUserId = function () {
				config.settings.bandwidth.userId = "Neo";
			};
			expect(setUserId).to.throw(TypeError);
		});
	});
});

