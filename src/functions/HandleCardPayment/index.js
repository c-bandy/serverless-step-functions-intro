const { sleep } = require('../../util');
const { ValidationError, PaymentError } = require('../../errors');

module.exports.handler = async function (event) {
  await sleep(5000);

  // Validate the order
  if (event.cardNumber.length !== 16) {
    throw new ValidationError('Card number must be 16 characters');
  }

  // Simulate random network error
  if (Math.random() > 0.50) {
    throw new PaymentError('Unknown network error!');
  }

  // Some code that processes card payment here

  return {
    ...event,
    paymentStatus: 'OK'
  }
};
