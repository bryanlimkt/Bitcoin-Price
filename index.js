var TelegramBot = require("node-telegram-bot-api"),
  //encrypt the bot_id
  bot = new TelegramBot("{{secrets.TELEGRAM_BTC_CHATBOT_TOKEN}}", {
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
