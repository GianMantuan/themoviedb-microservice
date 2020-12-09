<h1 align="center">The MovieDB Microservice</h1>
A TheMovieDB Microservice using ExpressJS and MongoDB (https://developers.themoviedb.org/3/gettingstarted/)

## Endpoints
### Movie
`GET /movie/:movie_id`
### Translation
`GET /movie/:movie_id/translations`

## Running the Project
First you need to install the dependencies:
```
## Yarn
yarn install

## NPM
npm install
```
## Environment file
You need a `.env` file with the following tags:
```
API_KEY=${API Key for the TheMovieDB API}
MONGO_USERNAME=${MongoDB username}
MONGO_PASSWORD=${MongoDB password}
MONGO_HOSTNAME=${MongoDB hostname}
MONGO_DB=${MongoDB database}
PORT=3000
```

## Running the microservice
After you configure the `.env` you can run the `docker-compose` command.
`docker-compose up -d`.
This will create two docker instances, one for the node api and the other for the mongodb instance.
