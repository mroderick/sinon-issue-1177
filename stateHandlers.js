'use strict';

module.exports = {
  get totalPrice() {
    throw new Error('totalPrice called');
    return 3;
  },

  get totalWasPrice() {
    throw new Error('totalWasPrice called');
    return 5;
  },

  get totalSaving() {
    return this.totalWasPrice - this.totalPrice;
  },
}