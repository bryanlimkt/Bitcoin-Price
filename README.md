# Bitcoin-Price

## Introduction

Cryptocurrencies, are digital means of exchange that uses cryptography for security.

They are at present very volatile as a result of several factors:

- Rapid news cycles
- Speculation
- Entry of institutional investors
- Devolpment of derivatives market for cryptocurrencies

Thus, investors would often need a quick way to monitor their virtual currencies. This project aims to provide real-time information on the current prices of cryptocurrencies.

## Methodology

This JavaScript based application uses information from the web (www.coindesk.com) and displays the prices of the three most popular cryptocurrencies right now: Bitcoin, Ethereum and XRP. It uses the request-promise library to make a web request, and cheerio to parse the results.

## Workflow

Goal:

- Dockerhub push following every github push
  - github actions
  - Other Options: Webhooks, Docker Hub Automated Build
- Telegram message after every github push
  - Webhooks (Updated every 1 hour)
- Simplify github add,commit and push
  - Done using .bat file - Need to run only one command instead of three.

## Run Application

- Create a comtainer by typing the following command into your terminal

  `docker run -d -p 8080:8080 bryanlimkt/btcprice`

- Obtain inforamtion using curl commands

  Bitcoin Price (USD):

  `curl -i http://localhost:8080/btc`

  Ethereum Price (USD):

  `curl -i http://localhost:8080/eth`

  XRP Price (USD):

  `curl -i http://localhost:8080/xrp`
