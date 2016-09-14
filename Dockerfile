# Set up Node.js app server
FROM node:latest

RUN mkdir -p /usr/src/demoapp/
WORKDIR /usr/src/demoapp/
COPY . /usr/src/demoapp/

EXPOSE 5000

CMD npm install --no-bin-links && npm start