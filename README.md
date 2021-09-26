Para pruebas

npm run coverage

Para crear imagen

docker build -t <your username>/node-web-app .
docker build -t shavichacon/node-web-app2 .

Para correrla

docker run -p 3000:3000 -d shavichacon/node-web-app2
