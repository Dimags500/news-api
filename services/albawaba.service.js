import Parser from "rss-parser";
let parser = new Parser();

const getalbawabaRss = async () => {
  const url = "https://www.albawaba.com/rss/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1";

  let feed = await parser.parseURL(url);
  let data = feed.items.map((item) => {
    return {
      title: item.title,
      link: item.link,
      img: item.enclosure.url,
      desc: item.content,
    };
  });
  console.log(data.length);

  return data;
};

export { getalbawabaRss };
