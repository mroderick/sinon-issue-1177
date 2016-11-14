'use strict';

var stateHandlers = require('../stateHandlers');
var sinon = require('sinon');
var expect = require('chai').expect;
var sandbox = sinon.sandbox.create();

describe('stateHandlers', function () {
  describe('#get totalSaving', function () {
    beforeEach(function () {
      sinon.stub(stateHandlers, 'totalWasPrice', { get: function() {
        return 5;
      }});
      sinon.stub(stateHandlers, 'totalPrice', { get: function() {
        return 3;
      }});
    });

    afterEach(function () {
      sandbox.restore();
    });

    it('returns the right value', function () {
      expect(stateHandlers.totalSaving).to.equal(2);
    });
  });
});