FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json /app

RUN npm install npm@7

COPY . .

CMD ["npm", "run", "build"]