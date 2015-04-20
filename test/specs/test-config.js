"use strict";

var chai = require("chai");
var expect = chai.expect;

var Config = require("../../lib/config");

describe("test config", function () {
	describe("config validate should succeed", function () {
		it("Should validate config assuming environment variables are properly set", function () {
			var config = new Config();
			expect(config.bandwidth.userId);
		});
	});

	describe("config validate should fail", function () {
		var previousBandwidthUserId;

		beforeEach(function () {
			previousBandwidthUserId = process.env.BW_USER_ID;
			process.env.BW_USER_ID = "";
		});

		afterEach(function () {
			process.env.BW_USER_ID = previousBandwidthUserId;
		});

		it("Should fail validation because userId is not set", function () {
			var newConfig = function () {
				return new Config();
			};
			expect(newConfig).to.throw();
		});
	});

	describe("config values are read-only", function () {
		var config = new Config();

		it("should throw changing config value", function () {
			var setUserId = function () {
				config.bandwidth.userId = "Neo";
			};
			expect(setUserId).to.throw(TypeError);
		});
	});
});

