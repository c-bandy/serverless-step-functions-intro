const { sleep } = require('../../util');

module.exports.handler = async function (event) {
  await sleep(5000);

  // Some code that processes cash payments here

  return {
    ...event,
    paymentStatus: 'OK'
  }
};
