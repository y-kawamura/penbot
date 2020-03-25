const axios = require('axios');

async function getTodayWeather() {
  const result = await axios.get(
    'http://weather.livedoor.com/forecast/webservice/json/v1?city=220010'
  );
  const todayForecast = result.data.forecasts.find(
    forecast => forecast.dateLabel === '今日'
  );
  return todayForecast.telop;
}

module.exports = {
  getTodayWeather
};
