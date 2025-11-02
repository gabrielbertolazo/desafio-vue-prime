<template>
  <!-- <Drawer
    v-model:visible="visible"
    header="Settings Menu"
    :position="'left'"
    :modal="false"
    :dismissable="false"
    :closeOnEscape="false"
    :showCloseIcon="false"
    class="sidebar-container"
  >
    <SidebarList :submenu="props.submenu" />
  </Drawer> -->
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
