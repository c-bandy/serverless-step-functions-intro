module.exports.handler = async function (event) {

  // Some code to clean up a failed payment

  // Send slack event, run some lambda, notify sysops?!
  // So many options!

  console.error({
    message: "Oh no, the purchase failed really badly!",
    event,
  })

  return event;
};
