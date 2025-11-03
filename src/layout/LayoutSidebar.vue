<template>
  <div class="app-layout">
    <Sidebar v-if="isMobile ? !isRouteUnderSettings() : true" />

    <div
      v-if="isMobile ? isMobile && isRouteUnderSettings() : true"
      class="main-content"
    >
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import { useMobile } from "@/composables/useMobile";
import { useRoute } from "vue-router";
const { isMobile } = useMobile();

const isRouteUnderSettings = (): boolean => {
  if (isMobile.value) {
    console.log("isMobile", isMobile.value);
    const route = useRoute();
    console.log("route path", route.path);
    const settingsRegex = /^\/settings\/.+$/;
    return !!route.path.match(settingsRegex);
  }

  return true;
};
</script>
