import { defineStore } from "pinia";

export interface UIState {
  isSidebarVisible: boolean;
}

const state = (): UIState => ({
  isSidebarVisible: false,
});

const getters = {};

const actions = {
  changeSidebarVisibility(visible: boolean) {
    this.isSidebarVisible = visible;
  },
};

export const useUIStore = defineStore("UIStore", {
  state,
  getters,
  actions,
});
