FROM --platform=linux/amd64 node:20-alpine3.18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD ["npm", "start"]