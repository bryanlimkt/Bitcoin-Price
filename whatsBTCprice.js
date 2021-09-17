const rp = require("request-promise");
const $ = require("cheerio");
const express = require("express");

var url = "";
const app = express();
let port = 8080;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get("/", (request, response) => {
  response.send("This is version 1.1");
});

app.get("/btc", (request, response) => {
  url = "https://www.coindesk.com/price/bitcoin";
  rp(url)
    .then((html) => {
      response.send($(".price-large", html).text());
    })
    .catch(function (err) {
      //handle error
    });
});

app.get("/eth", (request, response) => {
  url = "https://www.coindesk.com/price/ethereum";
  rp(url)
    .then((html) => {
      response.send($(".price-large", html).text());
    })
    .catch(function (err) {
      //handle error
    });
});

app.get("/xrp", (request, response) => {
  url = "https://www.coindesk.com/price/xrp";
  rp(url)
    .then((html) => {
      response.send($(".price-large", html).text());
    })
    .catch(function (err) {
      //handle error
    });
});
