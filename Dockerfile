FROM node:20-alpine


WORKDIR /app

COPY package*.json ./

RUN npm config set registry http://65.0.67.213:8081/repository/npm-group/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]