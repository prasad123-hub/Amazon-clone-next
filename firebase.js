import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ1BMSFD1DszoTxbciN5lM2OZiZ8IzXTc",
  authDomain: "azon-2-next.firebaseapp.com",
  projectId: "azon-2-next",
  storageBucket: "azon-2-next.appspot.com",
  messagingSenderId: "950165619285",
  appId: "1:950165619285:web:d4863e3616e5608ca14adc",
};

////// First install next-auth
///// update .env.local file id and secret key
//// create firebase.js file
//// copy paste config data
//// install firebase
//////going to header.js
///// add Onclick
//// copy paste  url in error message and add URI
/// coming to _app.js and import { Provider as AuthProvider } from 'next-auth/client'
/// wrap all in <AuthProvider></AuthProvider>
/// coming to header.js and import { signIn, signOut, useSession } from "next-auth/client";
//// create session varialble const [session] = useSession
/// according to session handle onClick such session? signIn : signOut

/// Payment Gateway

/// installed Stripe
/// added role to button
/// created on click function
/// create const stripePromise = laodStrip()
/// import {loadStrip } from "@strip/strip-js"
