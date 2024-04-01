const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

let name;

app.get("/api/random", async (req, res) => {
  const response = await axios.get("https://kaamelott.chaudie.re/api/random");
  const data = await response.data.citation;
  res.json(data);
  name = data.infos.personnage;
});

app.get(`/api/random/personnage/`, async (req, res) => {
  const response = await axios.get(
    `https://kaamelott.chaudie.re/api/random/personnage/${name}`
  );
  const data = await response.data.citation;
  res.json(data);
});

app.listen(PORT);
