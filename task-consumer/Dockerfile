FROM node:12.19.0-alpine3.9

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache bash
RUN wget -O /bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh
RUN chmod +x /bin/wait-for-it.sh

RUN npm install

COPY . .

CMD ["npm", "run", "start"] 
