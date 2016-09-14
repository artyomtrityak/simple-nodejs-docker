# Set up Node.js app server
FROM node:latest

WORKDIR /usr/src/demo/

EXPOSE 5000

CMD npm install --no-bin-links && npm start