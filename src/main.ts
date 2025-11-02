import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { Ripple } from "primevue";
import DialogService from "primevue/dialogservice";
import { VueQueryPlugin } from "@tanstack/vue-query";

import "./style.css";

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      prefix: "my",
      darkModeSelector: ".app-dark-mode",
      cssLayer: false,
    },
  },
});
app.use(DialogService);

app.directive("ripple", Ripple);

app.mount("#app");
