<template>
  <Avatar :label="label" class="mr-2" size="small" shape="circle" />
</template>

<script setup lang="ts">
import Avatar from "primevue/avatar";

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
