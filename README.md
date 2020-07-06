## weather-frontend

A frontend for the Moleculer projects!

MetaWeather microservice: https://github.com/peterdee/moleculer-metaweather

Database microservice: https://github.com/peterdee/moleculer-database

DEV: http://localhost:3000

STAGE: https://weather-frontend-react.herokuapp.com

### Deploy

```shell script
git clone https://github.com/peterdee/weather-frontend
cd ./weather-frontend
nvm use 14.3.0
yarn install
```

### Environemnt

You should provide the `.env` file for the environment variables.

See the [`.env.example`](.env.example) for details.

### Launch

```shell script
yarn dev
```

### Build

```shell script
yarn build
```

### Serve static

```shell script
yarn build && yarn start
```

### Heroku

The `stage` branch is deployed to Heroku automatically.
