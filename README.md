## Oslo Bysykkel integration 🚲

[Nextjs](https://nextjs.org/) app that fetches the public live data from the Oslo Bysykkel service and shows available bikes around the city.

#### Run the application

1. Install dependencies: `npm install`
2. Dev mode: `npm run dev` Then open the application at `http://localhost:3000`

#### Run unit tests

Run tests: `npm run test`

#### Run feature tests

Application is using [Cypress](https://www.cypress.io/) for functional testing.

Run featureTests: `npm run featureTest`

This command will run a express devserver with mock data on port 4000 (by default), and start the Nextjs app on port 3000, and start the Cypress tests.

#### Run the application Docker

1. Make sure you have installed [Docker](https://www.docker.com/)
2. Run `npm run build:image` to create a docker image named _origo-bysykkel_
3. Run `npm run start:image` to run the docker image

Then go to `http://localhost:3000` and lets go finding bikes and docks!
