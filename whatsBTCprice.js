const rp = require("request-promise");
const $ = require("cheerio");
const express = require("express");

const url = "https://www.coindesk.com/price/bitcoin";
const app = express();
port = 3000;

app.get("/", (request, response) => {
  rp(url)
    .then((html) => {
      response.send($(".price-large", html).text());
    })
    .catch(function (err) {
      //handle error
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
