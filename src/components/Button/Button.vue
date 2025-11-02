<template>
  <Button
    :label="label"
    :icon="icon && `pi ${icon}`"
    :severity="variant"
  />
</template>

<script setup lang="ts">
import Button from "primevue/button";

type ButtonVariants = 'success' | 'info' | 'danger';

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "Click Me",
  },
  icon: {
    type: String,
    required: false,
    default: ''
  },
  variant: {
    type: String as () => ButtonVariants,
    required: false,
  }
});
</script>
