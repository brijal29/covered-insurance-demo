## Covered Insurance Demo

## Getting started

You can view a live demo over at https://react-redux.realworld.io/

## Setup

Followig are the requirements to run this project:

- Node Package Manager (NPM)
- React
- Docker

## Usage

You can directly visit
https://hansalshah007.github.io/readme-generator/

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server

Local web server will use port 3000.

## Containerization using Docker

- `docker build -f Dockerfile -t covered-insurance-demo .` to create the build
- `docker run -it --rm -p 4001:3000 covered-insurance-demo` to run the container
