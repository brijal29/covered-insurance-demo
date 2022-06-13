## Covered Insurance Demo

## Getting started

You can view a live demo over at https://covered-insurance-demo-mankxihu9-brijal29.vercel.app/

## Setup

Followig are the requirements to run this project:

- Node Package Manager (NPM)
- React
- Docker

## Usage

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run test` to start the local server

Local web server will use port 3000.

## Containerization using Docker

- `docker build -f Dockerfile -t covered-insurance-demo .` to create the build
- `docker run -it --rm -p 4001:3000 covered-insurance-demo` to run the container
- open http://localhost:4001/
