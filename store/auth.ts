import { User } from "./../node_modules/@firebase/auth-types/index.d";
import { defineStore } from "pinia";

export interface AuthState {
  user?: User;
}

const state = (): AuthState => ({});

const getters = {};

const actions = {
    
};

export const useAuthStore = defineStore("authStore", {
  state,
  getters,
  actions,
});
