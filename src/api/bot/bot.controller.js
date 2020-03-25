const line = require('@line/bot-sdk');
const config = require('./config');
const lineClient = require('./lineClient');
const weather = require('../weather');

// event handler
async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  if (event.message.text === 'ぺんた') {
    event.message.text = 'なんだ';
  }

  if (event.message.text === '天気') {
    const todayWeather = await weather.getTodayWeather();
    event.message.text = `${todayWeather}だぺんよー`;
  }

  const echo = { type: 'text', text: event.message.text };

  return lineClient.replyMessage(event.replyToken, echo);
}

const reply = async (req, res) => {
  try {
    const result = await Promise.all(req.body.events.map(handleEvent));
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

module.exports = {
  reply
};
