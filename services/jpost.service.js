import Parser from "rss-parser";
let parser = new Parser();

const getJpostRss = async () => {
  const url = "https://rss.jpost.com/rss/rssfeedsfrontpage.aspx";

  let feed = await parser.parseURL(url);
  let titlesAndLinks = feed.items.map((item) => {
    return {
      title: item.title,
      link: item.link,
      content: item.content,
    };
  });

  console.log(titlesAndLinks);
  return titlesAndLinks;
};

export { getJpostRss };
