import axios from "axios";
const baseUrl = "/.netlify/functions";
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
