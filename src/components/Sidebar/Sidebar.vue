<template>
  <Drawer
    v-model:visible="visible"
    header="Settings Menu"
    :position="'left'"
    :modal="false"
    :dismissable="false"
    :closeOnEscape="false"
    :showCloseIcon="false"
  >
    <SidebarList :submenu="props.submenu" />
  </Drawer>
</template>

<script setup lang="ts">
import SidebarList from "./SidebarList.vue";
import { ref } from "vue";
import Drawer from "primevue/drawer";

const visible = ref(true);

const props = defineProps({
  submenu: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<style>
.p-drawer-content {
    padding: 0 0.40rem !important;
}
</style>
