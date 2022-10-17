import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL
console.log(baseUrl)
export const citySearch = async (city) => {
  try {
    const response = await axios.post(`${baseUrl}/searchForCity.`, { city });
    console.log(response)
    return response.data[0];
  } catch (error) {
    return null;
  }
};