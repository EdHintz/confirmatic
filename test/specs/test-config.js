"use strict";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = chai.expect;

chai.use(chaiAsPromised);

var Config = require("../../lib/config");

describe("test config", function () {
	describe("config validate should succeed", function () {
		it("Should validate config assuming environment variables are properly set", function () {
			var config = new Config();
			expect(config.validate()).to.eventually.be.fulfilled;
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
			expect(config.validate()).to.eventually.be.rejected;
		});
	});
});

