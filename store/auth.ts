import {
  collection,
  doc,
  Firestore,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { defineStore } from "pinia";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { User } from "~~/models/User";
export interface AuthState {
  firestore?: Firestore;
  user?: User;
}

const state = (): AuthState => ({});

const getters = {
  collectionRef: (state: AuthState) => collection(state.firestore, "users"),
  userRef: (state: AuthState) => doc(state.firestore, `users/${state.user.id}`),
};

const actions = {
  initStore(firestore: Firestore) {
    this.firestore = firestore;
  },
  async signUpUser(email: string, username: string, password: string) {
    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      //* create user Doc after registration

      const partialUser: PartialUser = {
        id: userCredentials.user.uid,
        username: username,
      };

      this.createUserDocument(partialUser);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  },
  async signInUser(email: string, password: string) {
    const auth = getAuth();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      this.fetchUser(userCredentials.user.uid);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  },
  async createUser(partialUser: PartialUser) {
    const docRef = doc(this.firestore, `users/${partialUser.id}`);
    this.user = {
      id: docRef.id,
      ...partialUser,
    };

    await setDoc(docRef, this.user);
    this.fetchUser();
  },
  async fetchUser(id: string) {
    // window.localStorage.setItem("userId", id);
    onSnapshot(doc(this.firestore, `users/${id}`), (doc) => {
      this.user = doc.data();
      console.log(this.user);
    });
  },
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});

interface PartialUser {
  id: string;
  username: string;
}
