FROM ubuntu:18.04
MAINTAINER Bryan Lim
# ARG DEBIAN_FRONTEND=noninteractive
# ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
# ENV USER root
RUN npm install express request request-promise cheerio
# RUN useradd -ms /bin/bash user
COPY whatsBTCprice.js /home/user/telegram-bot.js
#COPY start.sh /home/user/start.sh
#RUN chmod a+x /home/user/start.sh
# USER user
WORKDIR /home/user
#CMD ["sh","/home/user/start.sh"]
CMD ["node","/home/user/telegram-bot.js"]

