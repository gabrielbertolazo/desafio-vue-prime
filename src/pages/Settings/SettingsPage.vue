<template>
  <section
    class="settings-page m-8 flex flex-col justify-items-center items-center"
  >
    <h1 class="text-3xl">{{ formatString(submenu) }} Page</h1>
    <p class="text-1xl">Configure your application {{ submenu }} here.</p>
  </section>

  <component :is="getComponentName(props.submenu)" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, type Component } from "vue";

const userDetails = defineAsyncComponent(
  () => import("@/components/UserDetails/UserDetails.vue")
);
const props = defineProps({
  submenu: {
    type: String,
    required: false,
    default: "Settings",
  },
});

const formatString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const getComponentName = (submenu: string): Component | null => {
  const component: Record<string, Component | null> = {
    privacy: null,
    account: userDetails,
  };

  return component[submenu.toLowerCase()] || null;
};
</script>
