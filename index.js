import express, { urlencoded } from "express";
import cors from "cors";
import { getAljRss } from "./services/alj.service.js";
import { getMaarivRss } from "./services/maariv.service.js";
import { getJpostRss } from "./services/jpost.service.js";
import { getalbawabaRss } from "./services/albawaba.service.js";
import { getTest } from "./services/test.service.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/alj", async (req, res) => {
  const data = await getAljRss();
  console.log(typeof data);
  res.send(data);
  res.end();
});

app.get("/maariv", async (req, res) => {
  const data = await getMaarivRss();
  res.send(data);
  res.end();
});

app.get("/jpost", async (req, res) => {
  const data = await getJpostRss();
  res.send(data);
  res.end();
});

app.get("/bawa", async (req, res) => {
  const data = await getalbawabaRss();
  res.send(data);
  res.end();
});

app.get("/test", async (req, res) => {
  const data = await getTest(
    "https://www.albawaba.com/ar/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1/%D9%84%D8%A8%D9%86%D8%A7%D9%86-%D8%AD%D8%B1%D9%8A%D9%82-%D9%83%D8%A8%D9%8A%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%AF%D9%83%D9%88%D8%A7%D9%86%D8%A9-%D9%88%D8%A7%D9%84%D8%A3%D9%87%D8%A7%D9%84%D9%8A-%D9%8A%D8%B3%D8%AA%D8%BA%D9%8A%D8%AB%D9%88%D9%86-%D9%81%D9%8A%D8%AF%D9%8A%D9%88-1482131"
  );
  res.send(data);
  res.end();
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("server run " + PORT);
});
