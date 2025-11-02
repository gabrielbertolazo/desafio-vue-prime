<template>
  <section class="flex w-full justify-items-end gap-2">
    <Button label="Cancelar" variant="danger" @click="closeModal" />
    <Button label="Confirmar" variant="success" @click="confirmLogout" />
  </section>
</template>

<script setup lang="ts">
import type { DynamicDialogInstance } from "primevue/dynamicdialogoptions";
import Button from "../Button/Button.vue";
import { inject, type Ref } from "vue";
const dialogRef = inject("dialogRef") as Ref<DynamicDialogInstance | null>;

const closeModal = (): void => {
  dialogRef.value?.close();
};

const confirmLogout = (): void => {
  dialogRef.value?.close("dialog-close");
};
</script>
