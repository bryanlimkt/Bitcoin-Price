FROM ubuntu:18.04
MAINTAINER Bryan Lim
EXPOSE 3000
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
RUN cd /home
RUN mkdir bitcoinprice
RUN cd bitcoinprice
RUN npm init
RUN npm install request request-promise cheerio express --save
RUN useradd -ms /bin/bash user

COPY whatsBTCprice.js /bitcoinprice
USER user
WORKDIR /home/bitcoinprice

CMD ["node","/home/bitcoinprice/whatsBTCprice.js"]

