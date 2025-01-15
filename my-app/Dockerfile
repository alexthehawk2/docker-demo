FROM alpine:latest

# Install Node.js
RUN apk add --update nodejs npm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --no-cache

# Bundle app source
COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]