FROM node:12-slim

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

ARG PORT=3000
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production --loglevel verbose

COPY . .
RUN npm run build

EXPOSE $PORT

CMD [ "npm", "run", "start" ]
