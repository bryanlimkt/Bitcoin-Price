var TelegramBot = require("node-telegram-bot-api"),
  //encrypt the bot_id
  bot = new TelegramBot("1798178586:AAFaiIXTmS1BGgB32l1_9FRVxrLJ9EVm72k", {
    polling: true,
  });

const rp = require("request-promise");
const $ = require("cheerio");
const express = require("express");

bot.onText(/\/btc/, (msg) => {
  const chatId = msg.chat.id;
  var resp = "";

  rp("https://www.coindesk.com/price/bitcoin")
    .then((html) => {
      resp = $(".price-large", html).text();
    })
    .then(() => {
      bot.sendMessage(chatId, resp);
    })
    .catch(function (err) {
      bot.sendMessage(chatId, "There was an error");
    });
});

bot.onText(/\/eth/, (msg) => {
  const chatId = msg.chat.id;
  var resp = "";

  rp("https://www.coindesk.com/price/ethereum")
    .then((html) => {
      resp = $(".price-large", html).text();
    })
    .then(() => {
      bot.sendMessage(chatId, resp);
    })
    .catch(function (err) {
      bot.sendMessage(chatId, "There was an error");
    });
});

bot.onText(/\/xrp/, (msg) => {
  const chatId = msg.chat.id;
  var resp = "";

  rp("https://www.coindesk.com/price/xrp")
    .then((html) => {
      resp = $(".price-large", html).text();
    })
    .then(() => {
      bot.sendMessage(chatId, resp);
    })
    .catch(function (err) {
      bot.sendMessage(chatId, "There was an error");
    });
});
