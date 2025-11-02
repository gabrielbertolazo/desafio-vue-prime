import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import "../src/style.css";

setup((app) => {
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
});

const preview: Preview = {
  parameters: { 
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
