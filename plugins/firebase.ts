import { initializeApp, getApps } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJOvWEovA-slEaaxs9dVD1FVeJ7CkTWo4",
  authDomain: "league-teams-nuxt.firebaseapp.com",
  projectId: "league-teams-nuxt",
  storageBucket: "league-teams-nuxt.appspot.com",
  messagingSenderId: "469329671095",
  appId: "1:469329671095:web:d3745571482bb7c80dee32",
};

export let db: Firestore | undefined = undefined;

export default defineNuxtPlugin((nuxtApp) => {
  let app = undefined;

  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  }

  db = getFirestore(app);

  nuxtApp.provide("db", db);
});
