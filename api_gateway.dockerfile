FROM node:12

RUN mkdir -p /usr/src/app/api_gateway && \
    chmod 755 -R /usr/src/app/api_gateway

WORKDIR /usr/src/app/api_gateway

RUN apt install tzdata -y && \
    cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    echo "America/Sao_Paulo" > /etc/timezone

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start" ]