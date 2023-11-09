# YoutubeClone
Creating Youtube Clone using MERN Stack, where user can upload videos and can like, comment and save videos .
# MERN Stack [YouTube Clone](https://smfils1-youtube-clone.herokuapp.com)

This is a YouTube Clone that implements the main features of [YouTube](https://www.youtube.com/) **solely intended for educational purposes** and is created under **fair use**.

##### \* **Video Uploads are limited to 10 MB.**

## Technologies

- [MongoDB & Mongoose](https://mongoosejs.com/) for the database
- [Node & Express](http://expressjs.com/) for the backend
- [Google OAuth2](https://developers.google.com/identity/protocols/oauth2/web-server) for authentication
- [Google Drive API](https://developers.google.com/drive/api/v3/quickstart/nodejs) for cloud storage (services like AWS S3 and Google Cloud is recommended for production applications)
- [React](https://reactjs.org/docs/create-a-new-react-app.html) for the frontend
- [Redux](https://react-redux.js.org/) for frontend application state

## Features

- [x] Google OAuth
- [x] Video upload, streaming, commenting, and rating
- [x] Channel subscriptions
- [x] Trending, recommended, and categorized videos
- [x] Video searching
- [ ] Pagination
- [ ] Watch history
- [ ] Video Playlist
- [ ] Updating & deleting videos
- [ ] Going live



### Starting the App

- `npm install` to install all dependencies
- `npm run dev` to run both client & backend in development
- `cd server && npm run server` to run only backend
- `cd client && npm start` to run only client

## Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
