<template>
  <DynamicDialog />
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import DynamicDialog from "primevue/dynamicdialog";
import { useTheme } from "./composables/useTheme";

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>
