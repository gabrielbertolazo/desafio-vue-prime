<template>
  <div class="app-layout">
    <Sidebar />

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
    import Sidebar from "@/components/Sidebar/Sidebar.vue";
</script>
