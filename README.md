1. `docker pull node`
2. `cd <path nodejs demo server>`
2. docker build -t demoapp/nodeapp:v1 .
3. docker run -it --name backend -v `pwd`:/usr/src/letsplay -d -p 5000:5000 --link db:db letsplay/nodeapp:v1
