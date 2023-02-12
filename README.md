# Evaluate A News Article with Natural Language Processing

4th project of the Udacity Front End Web Developer Nanodegree program.

The project consists in building a web app that allows users to run Natural Language Processing (NLP) on articles or blog posts found on other websites. This app will provide us with information about the article, for instance wether the content has positive, neutral or negative tone and wether it is subjective or objective.
The user will type the URL wanted to analyze by the app and then the app will display the sentiment analysis obtained from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the content of the article.

Node and express will be the webserver and routing, and webpack will be our build tool of choice. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.

We will also use Jest to test our route and other JavaScript functions of our application.

## Tools Used

- HTML
- CSS
- JavaScript
- Node
- Express
- Webpack
- meaningcloud API
- Jest
- Workbox

## Run project

Below shows how to run in development and production mode.

run in development mode
To start the webpack dev server at port 8080

$ npm run build-dev

run in production mode
Generate the dist files and then start server at port 8081

$ npm run build-prod

$ npm run start

## Configs

The project contains a package.json file, two webpack config files webpack.config.dev.js and webpack.config.prod.js for development and production modes.

## API

The project uses meaningcloud API https://www.meaningcloud.com/products/sentiment-analysis, which provides a powerful and flexible AI-driven content analysis solutions.

The project receives an input url from the html file and passes it to the function handleSubmit from the file formHandler.js which will the function checkURL from file urlChecker.js to check that it is a valid url.

The information obtained from the api will be displayed on the page.

## Offline Functionality

The project have service workers set up in webpack.

## Testing

The project has Jest installed and can be run using npm run test.
