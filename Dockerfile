FROM node
EXPOSE 3000

RUN apt update
RUN apt install request-promise cheerio express
RUN cd~
RUN mkdir bitcoinprice
COPY . /bitcoinprice
workdir /home/bitcoinprice

CMD ["node","whatsBTCprice"]

