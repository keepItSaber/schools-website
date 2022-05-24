import { Firestore } from "firebase/firestore";
import { User } from "./../node_modules/@firebase/auth-types/index.d";
import { defineStore } from "pinia";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export interface AuthState {
  user?: User;
}

const state = (): AuthState => ({});

const getters = {};

const actions = {
  initStore(firestore: Firestore) { },
  async signUpUser(email: string, password: string) {
    try {
      const auth = getAuth();
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      this.user = credentials.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  },
  async signInUser(email: string, password: string) {
    const auth = getAuth();
    var user = null;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    return user;
  }
};


export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});
