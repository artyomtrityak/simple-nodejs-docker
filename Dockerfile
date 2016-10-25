FROM ubuntu:latest

RUN apt-get update

#Installing apache2
RUN apt-get -y install apache2
RUN a2enmod proxy
RUN a2enmod proxy_http
COPY nodeapp.conf /etc/apache2/sites-available/
RUN a2ensite nodeapp.conf
RUN a2dissite 000-default.conf

#Installing nodejs and npm
RUN apt-get install -y nodejs npm
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

RUN mkdir -p /usr/src/demoapp/
WORKDIR /usr/src/demoapp/
COPY . /usr/src/demoapp/

EXPOSE 80

CMD service apache2 start && npm install --no-bin-links && npm start