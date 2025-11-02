<template>
  <SidebarList :submenu="props.submenu" />
</template>

<script setup lang="ts">
import SidebarList from "./SidebarList.vue";

const props = defineProps({
  submenu: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
