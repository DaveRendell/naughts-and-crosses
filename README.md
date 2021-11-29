# Naughts and Crosses

Web based version of Naughts and Crosses (or Tic-Tac-Toe).

## Running the web app locally

To run the local development server, run:
- `npm install` to download dependencies
- `npm start` to launch the server
The webapp should then be viewable at http://localhost:1234

## Deploying the web app to Firebase

To deploy to Firebase, you will first need admin permissions for the project on
Firebase. The console is located here: [Firebase Console](https://console.firebase.google.com/project/naughts-and-crosses-67a25/overview).

Once you have permission run:
- `npx firebase login` to log in to Firebase
- `npm run deploy` to build the site and deploy to the web

The public URL for the site is at https://naughts-and-crosses-67a25.web.app
