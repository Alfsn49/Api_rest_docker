FROM node:18.17.0

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

#Bundle app source 
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]