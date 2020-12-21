const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const db = new DocumentClient({ convertEmptyValues: true });

module.exports.setPaymentStatus = async function (id, status) {
  return db.update({
    TableName: process.env.TABLE_NAME,
    Key: {
      paymentId: id
    },
    UpdateExpression: 'SET paymentStatus = :status',
    ExpressionAttributeValues: {
      ':status': status,
    },
  }).promise();
}
