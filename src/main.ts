import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { Ripple } from "primevue";
import DialogService from "primevue/dialogservice";
import { QueryClient, VueQueryPlugin } from "@tanstack/vue-query";

import "./style.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
    },
  },
});

queryClient.getQueryCache().subscribe((event) => {
  if (event.query.state.status === "error") {
    const error = event.query.state.error;

    // Podemos adicionar alguma tratativa global aqui, como exibir uma notificação...
    console.error("Erro na query:", error);
  }
});

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin, { queryClient});
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
