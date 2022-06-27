import axios from "axios";
import cheerio, { load } from "cheerio";

const getTest = async (url) => {
  const response = await axios.get(url);
  const $ = await cheerio.load(response.data);
  let data = $("body").html();

  return data;
};

export { getTest };
