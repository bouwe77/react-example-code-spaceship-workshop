import axios from "axios";

export async function getFacts(number) {
  try {
    const result = await axios.get(`http://localhost:4567/numbers/${number}/facts`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
}
