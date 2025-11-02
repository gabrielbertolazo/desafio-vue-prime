<template>
  <section class="flex items-center gap-2 h-[40px]">
    <ToggleSwitch :inputId="name" v-model="checked" @click="props.onClick" />
    <label v-if="props.label" :for="name" class="w-full">
      {{ props.label }}
    </label>
  </section>
</template>
<script setup lang="ts">
import ToggleSwitch from "primevue/toggleswitch";
import { ref } from "vue";

const checked = ref(false);

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: false,
    default: () => {},
  },
});
</script>
