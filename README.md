# README of the "Soccer Match Manager - Let's Play" Project

This repository contains a project consisting of a backend developed with Node.js and Prisma, a PostgreSQL database and a frontend developed with React.js. The main objective of the project is to manage a list of soccer games (matches) through a web application that allows to perform CRUD (Create, Read, Update, Delete) operations on these matches.

## Project Description

### `Backend with Node.js and Prisma`

- Backend developed with Node.js and Prisma.
- It connects to a PostgreSQL database to store information about the matches.
- Provides routes and controllers to manage matches (CRUD).
- It performs data validation and error handling.
- You can find the backend source code in the [server folder.](https://github.com/laura-lamprea/LetsPlay/tree/master/server)

### `PostgreSQL Database`

- Uses PostgreSQL as a database management system.
- Appropriate table structures have been defined to store information about the matches.
- SQL scripts to create the database and tables are located in the [prisma folder.](https://github.com/laura-lamprea/LetsPlay/tree/master/server/prisma)

### `Frontend with React.js, Tailwind, Redux`

- The frontend is a user interface developed with React.js, redux states and tailwind styles among others.
- It displays a list of soccer matches and allows users to create new matches.
- It offers search by city-address (name of the stadium) and filters by country and date.
- Uses a modular code structure.
- You can find the frontend source code in the [client folder.](https://github.com/laura-lamprea/LetsPlay/tree/master/client)

## Project Configuration

### `Configure the PostgreSQL database`

- Make sure you have PostgreSQL installed on your machine.
- Run the SQL scripts located in the "database" folder to create the database and tables.\*

### `Configure the Backend`

- Go to the "backend" folder and run `npm install` to install the dependencies.
- Adjust the database connection settings in the `.env file.`
- Start the Node.js server with `npm run dev`.

### `Configure the Frontend`

- Go to the corresponding folder and run `npm install` to install the dependencies.
- Start the application with `npm run start`.

## Deployment

`Database in Render:` The PostgreSQL database is located in Render. \
`Backend in Railway:` The backend has been deployed in Railway. You can access the API paths of the backend through the [URL provided by Railway.](https://pr-render-justplay-server-production.up.railway.app)\
`Frontend in Vercel:` The frontend is deployed in Vercel. You can access the user interface through the [URL provided by Vercel.](https://lets-play-ayhsym4we-laura-lamprea.vercel.app)

## Responsive
![image](https://github.com/laura-lamprea/LetsPlay/assets/84552402/16f76b09-48af-4406-9e0b-84222d04f3a9)
![image](https://github.com/laura-lamprea/LetsPlay/assets/84552402/d9fcce3d-60a5-4417-ade6-ebc0838306ad)
![image](https://github.com/laura-lamprea/LetsPlay/assets/84552402/26b6a079-4e85-4c75-82f1-a69600bab8cd)




