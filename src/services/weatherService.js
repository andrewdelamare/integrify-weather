import axios from "axios";
const baseUrl = "/.netlify/functions";

// Search by text for city
export const citySearch = async (city) => {
  try {
    const response = await axios.get(`${baseUrl}/searchForCity?city=${city}`);
    return response.data;
  } catch (error) {
    const parsed = error.response;
    console.log({ statusCode: parsed.status, body: parsed.data.Message });
    return null;
  }
};

// Search by city key for weather data
export const weatherSearch = async (locationKey) => {
  try {
    const response = await axios.get(
      `${baseUrl}/getWeather?locationKey=${locationKey}`
    );
    return response.data;
  } catch (error) {
    const parsed = error.response;
    console.log({ statusCode: parsed.status, body: parsed.data.Message });
    return null;
  }
};

// Search by ip address for aproximate location
export const locationSearch = async () => {
  try {
    const ip = await axios.get("https://api64.ipify.org?format=json");
    const response = await axios.get(`${baseUrl}/getLocation?ip=${ip.data.ip}`);
    return response.data;
  } catch (error) {
    const parsed = error.response;
    console.log({ statusCode: parsed.status, body: parsed.data.Message });
    return null;
  }
};
