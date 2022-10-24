const axios = require("axios");
const citySearch =
  "http://dataservice.accuweather.com/forecasts/v1/daily/1day/";
exports.handler = async (event) => {
  try {
    const response = await axios.get(
      `${citySearch}${event.queryStringParameters.locationKey}?apikey=${process.env.WEATHER}&metric=true`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    const parsed = error.response;
    return { statusCode: parsed.status, body: parsed.data.Message };
  }
};
