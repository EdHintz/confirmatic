"use strict";

var expect = require("chai").expect;
var config = require("../../lib/config");

describe("test config", function () {
	describe("config validate should succeed", function () {
		it("Should validate config assuming environment variables are properly set", function () {
			expect(config.validate()).to.equal(true);
		});
	});

	describe("config validate should fail", function () {
		var previousBandwidthUserId = config.bandwidth.userId;

		beforeEach(function () {
			config.bandwidth.userId = "";
		});

		afterEach(function () {
			config.bandwidth.userId = previousBandwidthUserId;
		});

		it("Should fail validation because userId is not set", function () {
			expect(config.validate()).to.equal(false);
		});
	});
});

