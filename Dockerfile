FROM ubuntu:18.04
MAINTAINER Bryan Lim
EXPOSE 3000
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install nodejs npm
RUN npm install request-promise cheerio express --save
RUN useradd -ms /bin/bash user
RUN cd ~
RUN mkdir bitcoinprice
COPY whatsBTCprice.js /bitcoinprice
USER user
WORKDIR /home/bitcoinprice

CMD ["node","/home/bitcoinprice/whatsBTCprice.js"]

