## Oslo Bysykkel integration 🚲

[Nextjs](https://nextjs.org/) app that fetches the public live data from the Oslo Bysykkel service and shows available bikes around the city.

#### Run the application

1. Install dependencies: `npm install`
2. Dev mode: `npm run dev` Then open the application at `http://localhost:3000`

#### Run tests

Run tests: `npm test`

##### Run the application Docker

1. Make sure you have installed [Docker](https://www.docker.com/)
2. Run `npm run build:image` to create a docker image named _origo-bysykkel_
3. Run `npm run start:image` to run the docker image

Then go to `http://localhost:3000` and lets go finding bikes and docks!
