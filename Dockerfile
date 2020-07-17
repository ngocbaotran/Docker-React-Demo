FROM node:12-alpine

WORKDIR /app/public

COPY package*.json ./
COPY . .

RUN npm i
