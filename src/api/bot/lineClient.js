const line = require('@line/bot-sdk');
const config = require('./config');

const lineClient = new line.Client(config);

module.exports = lineClient;
