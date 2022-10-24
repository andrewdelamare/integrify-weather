const axios = require("axios");
const locationSearch =
  "http://dataservice.accuweather.com/locations/v1/cities/ipaddress";
exports.handler = async (event) => {
  try {
    const response = await axios.get(
      `${locationSearch}?apikey=${process.env.WEATHER}&q=${event.queryStringParameters.ip}`
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
