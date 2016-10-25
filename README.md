#Simple docker node.js apache container

1. `docker build -t nodeapp .`
2. `docker run -dit -p 8080:80 nodeapp`
3. `docker-machine ip`
4. Go to `http://<docker-machine ip>:8080/app`
