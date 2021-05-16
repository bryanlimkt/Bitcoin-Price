const rp = require("request-promise");
const $ = require("cheerio");
const express = require("express");

rp("https://www.coindesk.com/price/bitcoin")
.then((html) => {
    console.log($(".price-large", html).text());
})
.catch(function (err) {
    return ("There was an error")
});