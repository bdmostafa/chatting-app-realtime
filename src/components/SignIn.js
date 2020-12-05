import React from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const SignIn = () => {
  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Please do not violate the community guidelines, terms and conditions or you will be banned for life!
      </p>
    </>
  );
};

export default SignIn;
