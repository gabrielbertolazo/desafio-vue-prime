import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { Ripple } from "primevue";
import DialogService from "primevue/dialogservice";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".dark-theme",
    },
  },
});

app.directive("ripple", Ripple);
app.use(DialogService);

app.mount("#app");
