import Parser from "rss-parser";
let parser = new Parser();

const getMaarivRss = async () => {
  const url = "https://www.maariv.co.il/Rss/RssFeedsMivzakiChadashot";

  let feed = await parser.parseURL(url);
  let titlesAndLinks = feed.items.map((item) => {
    return { title: item.title, link: item.link };
  });
  return titlesAndLinks;
};

export { getMaarivRss };
