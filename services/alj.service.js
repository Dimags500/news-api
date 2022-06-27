import Parser from "rss-parser";
let parser = new Parser();

const getAljRss = async () => {
  const url = "https://www.aljazeera.com/xml/rss/all.xml";
  const arabicUrl =
    "https://www.aljazeera.net/aljazeerarss/a7c186be-1baa-4bd4-9d80-a84db769f779/73d0e1b4-532f-45ef-b135-bfdff8b8cab9";

  let feed = await parser.parseURL(arabicUrl);
  let titlesAndLinks = feed.items.map((item) => {
    return { title: item.title, link: item.link };
  });
  return titlesAndLinks;
};

export { getAljRss };
