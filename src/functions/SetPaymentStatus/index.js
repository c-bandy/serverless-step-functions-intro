const { setPaymentStatus } = require('./db');

module.exports.handler = async function (event) {
  await setPaymentStatus(event.paymentId, event.paymentStatus);

  return event;
};
