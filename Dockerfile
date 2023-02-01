FROM node:18.13-alpine3.17 AS production

WORKDIR /usr/src/app

COPY package*.json yarn.lock tsconfig.release.json ./
COPY src ./


RUN yarn install
RUN yarn start:production

