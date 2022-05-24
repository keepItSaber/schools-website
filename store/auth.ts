import { Firestore } from "firebase/firestore";
import { User } from "./../node_modules/@firebase/auth-types/index.d";
import { defineStore } from "pinia";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export interface AuthState {
  user?: User;
}

const state = (): AuthState => ({});

const getters = {};

const actions = {
  initStore(firestore: Firestore) {},
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
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});
