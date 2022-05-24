import { defineStore } from "pinia";

export interface UIState {
  isSidebarVisible: boolean;
  activeRoute: string;
  activeAuthView: AuthView;
}

export enum AuthView {
  LOGIN = "login",
  REGISTER = "register",
}

const state = (): UIState => ({
  isSidebarVisible: false,
  activeAuthView: AuthView.LOGIN,
  activeRoute: "/",
});

const getters = {
  isActive: (state: UIState) => {
    return (route: string) => state.activeRoute === route;
  },
};

const actions = {
  changeSidebarVisibility(visible: boolean) {
    this.isSidebarVisible = visible;
  },
  changeActiveRouteIndex(route: string) {
    this.activeRoute = route;
  },
};

export const useUIStore = defineStore("UIStore", {
  state,
  getters,
  actions,
});
