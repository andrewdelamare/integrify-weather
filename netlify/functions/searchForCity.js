const axios = require("axios");
const citySearch =
  "http://dataservice.accuweather.com/locations/v1/cities/search";
exports.handler = async (event) => {
  try {
    const response = await axios.get(
      `${citySearch}?apikey=${process.env.REACT_APP_WEATHER}&q=${event.queryStringParameters.city}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data[0]),
    };
  } catch (error) {
    const parsed = error.response;
    return { statusCode: parsed.status, body: parsed.data.Message };
  }
};
