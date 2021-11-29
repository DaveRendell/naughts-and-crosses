import * as React from "react"
import * as ReactDOM from "react-dom"
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import firebaseConfig from "../firebase-config.json"
import Authentication from "./authentication";

firebase.initializeApp(firebaseConfig)

const App = () => (
  <div>
    <h1>Naughts and Crosses</h1>
    <Authentication />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById("root"),
)
