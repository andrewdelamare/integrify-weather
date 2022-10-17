import axios from "axios";

const citySearch =
  "http://dataservice.accuweather.com/locations/v1/cities/search";

exports.handler = async (event) => {
  try {
    const city = event.body.city;
    const response = await axios.get(
      `${citySearch}?apikey=${process.env.REACT_APP_WEATHER}&q=${city}`
    );
    console.log(response)
    return response.data[0];
  } catch (error) {
    return null;
  }
};
