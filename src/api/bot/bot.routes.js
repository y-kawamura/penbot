const express = require('express');
const line = require('@line/bot-sdk');
const config = require('./config');
const controller = require('./bot.controller');

const router = express.Router();

router.post('/reply', line.middleware(config), controller.reply);

module.exports = router;
