<template>
  <section class="fixed left h-full">
    <div class="card flex justify-center h-full">
      <SidebarList :submenu="props.submenu" />
    </div>
  </section>
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
