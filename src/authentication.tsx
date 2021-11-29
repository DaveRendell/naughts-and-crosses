import * as React from "react"
import firebase from "firebase/compat/app"
import { StyledFirebaseAuth } from "react-firebaseui"

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
}

const Authentication = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false)

  React.useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
    return unregisterAuthObserver
  })

  if (isSignedIn) {
    return (
      <div>
        <p>Welcome {firebase.auth().currentUser.displayName!}</p>
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      <p>Please sign in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />      
    </div>
  )
}

export default Authentication
