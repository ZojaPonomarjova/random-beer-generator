import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/styles/normalize.scss";
import "./assets/styles/fonts.scss";

createApp(App).use(store).mount("#app");
