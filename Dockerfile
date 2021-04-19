FROM ubuntu:18.04
MAINTAINER Bryan Lim
EXPOSE 8080
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install express request request-promise cheerio --save
RUN useradd -ms /bin/bash user
COPY whatsBTCprice.js /home/user/whatsBTCprice.js
# COPY start.sh /home/user/start.sh
# RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user
# FROM ubuntu:18.04
# MAINTAINER Bryan Lim
# EXPOSE 8080
# ARG DEBIAN_FRONTEND=noninteractive
# ENV TZ=Asia/Singapore

# RUN apt-get update
# RUN apt-get install -y nodejs npm
# ENV USER root
# RUN cd /home
# RUN mkdir bitcoinprice
# RUN cd bitcoinprice
# RUN npm install request request-promise cheerio express --save
# RUN useradd -ms /bin/bash user

# COPY whatsBTCprice.js /bitcoinprice
# USER user
# WORKDIR /home/bitcoinprice

# CMD ["node","/home/bitcoinprice/whatsBTCprice.js"]

