## Available Scripts

In the project directory, you can run:

### `npm start`


### Docker

Develop:
### `docker build -f Dockerfile -t films_table:dev .`

### `sudo docker run -it --rm -v ${PWD}:/films_table -v /films_table/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true films_table:dev`

### `sudo docker-compose up -d --build`

Production:
### `sudo docker build -f Dockerfile.prod -t films_table:prod . `

### `sudo docker run -it --rm -p 1337:80 films_table:prod`

### `sudo docker-compose -f docker-compose.prod.yml up -d --build`