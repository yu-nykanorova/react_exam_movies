# The Movies app

This is a learning project built for practice and portfolio purposes. A React application that allows users to browse, search, and filter movies by genres using data from The Movie Database (TMDB) API.
The project focuses on working with external APIs, client-side routing, query parameters, and scalable project structure.

## Features
- Browse movies with pagination;
- Search movies by title (or part of title);
- Filter movies by genres;
- View detailed information about a selected movie;
- URL-based state management (search, filters, pagination via query params);
- Reusable and modular component structure;
- API requests organized via service layer;
- Responsive UI built with Tailwind CSS.

## Getting Started
1) Clone the repository
```bash
git clone git@github.com:yu-nykanorova/react_exam_movies.git
cd movies-app
```
2) Install dependencies
```bash
npm install
```
3) Set up environment variables     
Create a .env file in the root folder with following data:

VITE_API_URL=https://api.themoviedb.org/3           
VITE_TMDB_TOKEN=your_tmdb_token_here

You can get your personal TMDB token for free from:
https://www.themoviedb.org/settings/api

OR

use this token:
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTcyYzA4YzViNzk2MzA0YzI3NmVkYmVlNmRkMTBkYSIsIm5iZiI6MTc3MzQwMDQ3OC4zNTAwMDAxLCJzdWIiOiI2OWIzZjE5ZTRkNTQ2Njk0NmZjYmRiYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.h7_rpb-jwHDrGnmWm_etwztuZ3f7EtUdHgi76wxFYf4

4) Run the project
```bash
npm run dev
```
Open http://localhost:5173 to view it in the browser.

## Technologies Used
- React + Vite
- TypeScript
- React Router DOM
- Axios
- Redux Toolkit
- Validation library Joi
- Tailwind CSS
- The Movie Database (TMDB) API

## Design
The UI is inspired by modern movie web applications and design concepts from platforms like Dribbble.

*Created by Yuliia Nykanorova*