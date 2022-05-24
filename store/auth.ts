import { collection, doc, Firestore, setDoc } from "firebase/firestore";
import { User } from "./../node_modules/@firebase/auth-types/index.d";
import { defineStore } from "pinia";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
export interface AuthState {
  firestore?: Firestore;
  user?: User;
}

const state = (): AuthState => ({});

const getters = {
  collectionRef: (state: AuthState) => collection(state.firestore, "users"),
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
        userId: userCredentials.user.uid,
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
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  },
  async createUserDocument(partialUser: PartialUser) {
    const docRef = doc(this.collectionRef);
    this.user = {
      id: docRef.id,
      ...partialUser,
    };

    await setDoc(docRef, this.user);
  },
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});

interface PartialUser {
  userId: string;
  username: string;
}
