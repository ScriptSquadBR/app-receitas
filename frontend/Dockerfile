FROM node:16.14-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install npm run build

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run"]

CMD ["dev"]