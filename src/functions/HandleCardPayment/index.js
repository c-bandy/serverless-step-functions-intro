const { sleep } = require('../../util');

class PaymentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PaymentError';
  }
}

module.exports.handler = async function (event) {
  await sleep(3000);

  // 50% chance to fail payment
  if (Math.random() > 0.5) {
    throw new PaymentError('Payment failed')
  }

  return {
    ...event,
    paymentStatus: 'OK'
  }
};
