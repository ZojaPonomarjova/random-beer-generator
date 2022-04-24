import { createStore } from "vuex";
import { moduleForPerson } from "./moduleforPerson";
import { moduleForBeer } from "./moduleForBeer";

export default createStore({
  state: {
    //состояние для загрузки
    isLoading: false,
    //состояние для отображения стартовой страницы/описания пива
    chooseButtonIsClicked: false,
    //состояние для сайдбара на маленьких экранах
    minimizeSidebar: true,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    chooseButtonIsClicked(state) {
      return state.chooseButtonIsClicked;
    },
    minimizeSidebar(state) {
      return state.minimizeSidebar;
    },
  },
  mutations: {
    SET_IS_LOADING: (state, payload) => {
      state.isLoading = payload;
    },
    SET_CHOOSEBUTTON_IS_CLICKED: (state, payload) => {
      state.chooseButtonIsClicked = payload;
    },
    TOGGLE_SIDEBAR: (state) => {
      state.minimizeSidebar = !state.minimizeSidebar;
    },
  },
  actions: {
    minimizeSidebar: (context) => {
      context.commit("TOGGLE_SIDEBAR");
    },
  },
  modules: { moduleForPerson, moduleForBeer },
});
